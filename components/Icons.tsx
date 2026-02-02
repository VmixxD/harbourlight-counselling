import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function LeafIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14c7-8 16-8 16-8-1 9-8 14-14 14-1.5 0-2-.5-2-2 0-1 .5-2 0-4Z" />
      <path d="M8 18c2-2 5-4 8-5" />
    </svg>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="12" r="4.5" />
      <circle cx="15" cy="12" r="4.5" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3c2 3 0 4 3 7 2 2 3 4 3 6a6 6 0 1 1-12 0c0-2 1-4 3-6 2-2 1-4 3-7Z" />
      <path d="M12 13c1.2 1.4.6 3.5-1.5 4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3 1.8 4.5L18 9l-4.2 1.5L12 15l-1.8-4.5L6 9l4.2-1.5L12 3Z" />
      <path d="m4 16 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </svg>
  );
}
