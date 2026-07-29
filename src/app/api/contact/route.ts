import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/lib/site-config";

// Must be an address on a domain verified in Resend — the old
// onboarding@resend.dev sandbox sender only delivers to the account owner.
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || `${siteConfig.developerName} <contact@areebusman.dev>`;

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json({ error: "Email is not configured yet." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: siteConfig.contactEmail,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
