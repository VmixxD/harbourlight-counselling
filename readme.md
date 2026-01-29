Harbourlight Counselling Website

Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Resend (transactional email)

Getting started
1) Copy `.env.example` to `.env.local` and fill in the values.
2) Install dependencies: `npm install`
3) Run the dev server: `npm run dev`

Key files to update
- `lib/site.ts` (business details, fees, session length, contact info)
- `lib/services.ts` (service-specific copy)
- `lib/faqs.ts` (FAQ content)
- `app/policies/*` (policy copy and retention window)
- `AGENTS.md` (agent requirements and handoffs)

Email configuration
- The enquiry form posts to `app/api/enquiry/route.ts`.
- Emails send via Resend when `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `ENQUIRY_FROM_EMAIL` are set.

Booking link
- Set `NEXT_PUBLIC_BOOKING_URL` in `.env.local` to your booking system.

Notes
- Replace placeholder fields like `[add fee]` before launch.
- The site includes NZ crisis contacts, scope limits, and privacy disclosures.
