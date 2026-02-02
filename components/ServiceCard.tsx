import React from "react";
import Link from "next/link";
import { Service } from "@/lib/services";
import { cn } from "@/lib/utils";
import { FlameIcon, LeafIcon, LinkIcon } from "@/components/Icons";

const iconMap: Record<string, React.ReactNode> = {
  "identity-shame": <LeafIcon className="h-6 w-6 text-forest" />,
  relationships: <LinkIcon className="h-6 w-6 text-forest" />,
  burnout: <FlameIcon className="h-6 w-6 text-forest" />
};

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group block h-full rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft transition-transform hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-mist p-3 ring-1 ring-sage/30">
          {iconMap[service.slug]}
        </div>
        <h3 className="font-heading text-2xl text-forest">{service.title}</h3>
      </div>
      <p className="mt-4 text-sm text-forest/75">{service.shortDescription}</p>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-forest">
        Explore this service
      </span>
    </Link>
  );
}
