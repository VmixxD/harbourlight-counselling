import React from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type PageHeaderProps = {
  title: string;
  intro: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: {
    src: string;
    alt: string;
    wrapperClassName?: string;
    className?: string;
  };
};

export function PageHeader({ title, intro, primaryCta, secondaryCta, image }: PageHeaderProps) {
  const hasImage = Boolean(image);
  const imageWrapperClass = `overflow-hidden rounded-2xl border border-sage/50 bg-white/80 shadow-lift mx-auto w-full max-w-sm sm:max-w-md ${
    image?.wrapperClassName || "aspect-[3/4]"
  }`;
  const imageClass = image?.className ? `h-full w-full ${image.className}` : "h-full w-full object-cover";

  return (
    <section className="relative overflow-hidden bg-soft-linear py-16">
      <div className="absolute inset-0 bg-soft-radial opacity-80" />
      <Container
        className={`relative ${hasImage ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]" : "space-y-6"}`}
      >
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-forest/75">
              Harbourlight Counselling
            </p>
            <h1 className="font-heading text-4xl text-forest md:text-5xl">{title}</h1>
            <p className="text-lg text-forest/80">{intro}</p>
          </div>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
        {image && (
          <div className={imageWrapperClass}>
            <img src={image.src} alt={image.alt} className={imageClass} loading="lazy" />
          </div>
        )}
      </Container>
    </section>
  );
}
