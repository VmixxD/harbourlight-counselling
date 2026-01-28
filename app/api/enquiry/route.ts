import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type RateLimitRecord = { count: number; firstRequest: number };

export const runtime = "nodejs";

// In-memory rate limit; replace with durable storage if needed.
const rateLimit = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim();
  }
  return "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const record = rateLimit.get(ip);
  if (!record) {
    rateLimit.set(ip, { count: 1, firstRequest: now });
    return false;
  }
  if (now - record.firstRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimit.set(ip, { count: 1, firstRequest: now });
    return false;
  }
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  record.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again soon." }, { status: 429 });
  }

  const payload = await request.json();
  if (payload.company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (payload.name || "").toString().trim();
  const email = (payload.email || "").toString().trim();
  const phone = (payload.phone || "").toString().trim();
  const contactMethod = (payload.contactMethod || "").toString().trim();
  const message = (payload.message || "").toString().trim();
  const consent = payload.consent === "on" || payload.consent === true || payload.consent === "true";

  if (!name || !email || !contactMethod || !consent) {
    return NextResponse.json({ message: "Please complete the required fields." }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  const replyTo = process.env.ENQUIRY_REPLY_TO || toEmail;

  if (resendKey && toEmail && fromEmail) {
    const resend = new Resend(resendKey);
    const subject = `New enquiry from ${name}`;
    const enquiryText = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "Phone: not provided",
      `Preferred contact method: ${contactMethod}`,
      message ? `Message: ${message}` : "Message: not provided"
    ].join("\n");

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: replyTo || email,
      subject,
      text: enquiryText
    });

    await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: replyTo || toEmail || undefined,
      subject: "Thanks for your enquiry",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for reaching out. I have received your enquiry and will respond within the stated timeframe.",
        "",
        "If you need urgent support, please call 111 or text/call 1737 in New Zealand.",
        "",
        "Warmly,",
        "Harbourlight Counselling"
      ].join("\n")
    });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
