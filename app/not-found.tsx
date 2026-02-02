import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container className="space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-forest/70">Page not found</p>
        <h1 className="font-heading text-4xl text-forest">We could not find that page.</h1>
        <p className="text-base text-forest/70">
          If you arrived here by mistake, head back to the home page.
        </p>
        <div className="flex justify-center">
          <Button href="/">Return home</Button>
        </div>
        <Link href="/contact" className="text-sm text-forest/70 underline">
          Or contact me directly
        </Link>
      </Container>
    </section>
  );
}
