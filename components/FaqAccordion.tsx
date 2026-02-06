"use client";

import React from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

const ANIMATION_DURATION_MS = 260;
const ANIMATION_EASING = "cubic-bezier(0.32, 0.72, 0, 1)";

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);
  const summaryRef = React.useRef<HTMLElement>(null);
  const animationRef = React.useRef<Animation | null>(null);
  const isClosingRef = React.useRef(false);
  const isExpandingRef = React.useRef(false);
  const [isClosingVisual, setIsClosingVisual] = React.useState(false);

  const clearAnimationState = React.useCallback(() => {
    const details = detailsRef.current;
    if (!details) return;

    details.style.height = "";
    details.style.overflow = "";
    isClosingRef.current = false;
    isExpandingRef.current = false;
    setIsClosingVisual(false);
    animationRef.current = null;
  }, []);

  React.useEffect(() => {
    return () => {
      animationRef.current?.cancel();
    };
  }, []);

  const collapse = React.useCallback(() => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    if (!details || !summary) return;

    setIsClosingVisual(true);

    const startHeight = `${details.offsetHeight}px`;
    const detailsStyles = window.getComputedStyle(details);
    const verticalPadding =
      parseFloat(detailsStyles.paddingTop) + parseFloat(detailsStyles.paddingBottom);
    const verticalBorder =
      parseFloat(detailsStyles.borderTopWidth) + parseFloat(detailsStyles.borderBottomWidth);
    const endHeight = `${summary.offsetHeight + verticalPadding + verticalBorder}px`;

    details.style.overflow = "hidden";
    animationRef.current?.cancel();
    isClosingRef.current = true;

    animationRef.current = details.animate(
      { height: [startHeight, endHeight] },
      { duration: ANIMATION_DURATION_MS, easing: ANIMATION_EASING }
    );

    animationRef.current.onfinish = () => {
      details.open = false;
      clearAnimationState();
    };
    animationRef.current.oncancel = clearAnimationState;
  }, [clearAnimationState]);

  const expand = React.useCallback(() => {
    const details = detailsRef.current;
    if (!details) return;

    setIsClosingVisual(false);

    const startHeight = `${details.offsetHeight}px`;

    details.style.overflow = "hidden";
    details.open = true;

    window.requestAnimationFrame(() => {
      if (!detailsRef.current) return;

      const endHeight = `${detailsRef.current.offsetHeight}px`;
      detailsRef.current.style.height = startHeight;
      animationRef.current?.cancel();
      isExpandingRef.current = true;

      animationRef.current = detailsRef.current.animate(
        { height: [startHeight, endHeight] },
        { duration: ANIMATION_DURATION_MS, easing: ANIMATION_EASING }
      );

      animationRef.current.onfinish = clearAnimationState;
      animationRef.current.oncancel = clearAnimationState;
    });
  }, [clearAnimationState]);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const details = detailsRef.current;
      if (!details) return;

      event.preventDefault();

      const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (shouldReduceMotion || typeof details.animate !== "function") {
        details.open = !details.open;
        setIsClosingVisual(false);
        return;
      }

      if (isClosingRef.current || !details.open) {
        expand();
      } else if (isExpandingRef.current || details.open) {
        collapse();
      }
    },
    [collapse, expand]
  );

  return (
    <details
      ref={detailsRef}
      className="group rounded-2xl border border-sage/50 bg-white/70 p-6 shadow-soft"
    >
      <summary
        ref={summaryRef}
        onClick={handleClick}
        className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-forest"
      >
        <span>{item.question}</span>
        <span className="text-xl text-forest/60 transition-transform group-open:rotate-45">+</span>
      </summary>
      <div
        className={`mt-3 text-sm text-forest/75 transition-opacity ${
          isClosingVisual ? "opacity-0 duration-75" : "opacity-100 duration-200"
        }`}
      >
        {item.answer}
      </div>
    </details>
  );
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <FaqAccordionItem key={item.question} item={item} />
      ))}
    </div>
  );
}
