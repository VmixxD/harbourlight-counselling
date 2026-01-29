"use client";

import React, { useState } from "react";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

const contactMethods = ["Email", "Phone", "Either"] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-sage/50 bg-white/80 p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-forest">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-sm text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-forest">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-sm text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-forest">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            className="w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-sm text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contactMethod" className="text-sm font-medium text-forest">
            Preferred contact method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            required
            className="w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-sm text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
          >
            <option value="">Select one</option>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-forest">
          What brings you here? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-sage/60 bg-white px-4 py-3 text-sm text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40"
        />
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="space-y-3">
        <label className="flex items-start gap-3 text-sm text-forest/80">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-sage/60 text-forest focus-visible:ring-forest/50"
          />
          <span>
            I have read the{" "}
            <a href="/policies/privacy" className="underline underline-offset-4">
              privacy notice
            </a>{" "}
            and consent to being contacted about my enquiry.
          </span>
        </label>
        <p className="text-xs text-forest/60">
          Response time is typically {site.responseTime}. This form is not monitored for emergencies.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="w-full sm:w-auto" variant="primary">
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </Button>
        {status === "sent" && (
          <p className="text-sm text-forest" role="status" aria-live="polite">
            Thank you. Your enquiry has been received.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-danger" role="status" aria-live="polite">
            {error}
          </p>
        )}
      </div>
      <p className="text-xs text-forest/60">{site.crisisLine}</p>
    </form>
  );
}
