import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validatePayload(body: ContactPayload) {
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return { error: "Please enter a valid name." };
  }

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (!message) {
    return { error: "Please enter a message." };
  }

  return { name, email, message };
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validated = validatePayload(body);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { name, email, message } = validated;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  const teamEmail = resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `New project inquiry from ${name}`,
    html: `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#f7f7f5; padding:24px;">
        <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #eee; border-radius:12px; overflow:hidden;">
          <div style="padding:18px 24px; background: linear-gradient(90deg, #d32f2f 0%, #b71c1c 100%); color:#fff;">
            <h2 style="margin:0; font-size:18px; font-weight:700;">New contact form submission</h2>
          </div>

          <div style="padding:20px 24px;">
            <div style="border-left:4px solid #d32f2f; padding-left:16px; margin-bottom:14px;">
              <p style="margin:0 0 8px; color:#111;">
                <strong>Name:</strong> ${safeName}
              </p>
              <p style="margin:0 0 8px; color:#111;">
                <strong>Email:</strong> ${safeEmail}
              </p>
            </div>

            <p style="margin:14px 0 8px; color:#111; font-weight:700;">Message</p>
            <div style="background:#fafafa; border:1px solid #eee; border-radius:10px; padding:14px 16px; color:#222; line-height:1.6;">
              ${safeMessage}
            </div>

            <p style="margin:18px 0 0; color:#666; font-size:13px; line-height:1.5;">
              Sent from your website contact form.
            </p>
          </div>
        </div>
      </div>
    `,
  });

  const confirmationEmail = resend.emails.send({
    from: fromEmail,
    to: [email],
    subject: "We received your project request — KATSL",
    html: `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; background:#f7f7f5; padding:24px;">
        <div style="max-width:680px; margin:0 auto; background:#ffffff; border:1px solid #eee; border-radius:12px; overflow:hidden;">
          <div style="padding:18px 24px; background: linear-gradient(90deg, #d32f2f 0%, #b71c1c 100%); color:#fff;">
            <h2 style="margin:0; font-size:18px; font-weight:700;">Project request received</h2>
          </div>

          <div style="padding:20px 24px;">
            <p style="margin:0 0 10px; color:#111; font-size:15px; line-height:1.6;">
              Thanks for reaching out, <strong>${safeName}</strong>!
            </p>

            <p style="margin:0 0 14px; color:#333; line-height:1.6;">
              We received your project details and an enterprise advisor from our team will email you within <strong>1 business day</strong>.
            </p>

            <div style="border-left:4px solid #d32f2f; padding-left:16px; margin-bottom:14px;">
              <p style="margin:0 0 8px; color:#111;">
                <strong>Your email:</strong> ${safeEmail}
              </p>
            </div>

            <p style="margin:14px 0 8px; color:#111; font-weight:700;">Your message</p>
            <div style="background:#fafafa; border:1px solid #eee; border-radius:10px; padding:14px 16px; color:#222; line-height:1.6;">
              ${safeMessage}
            </div>

            <p style="margin:18px 0 0; color:#666; font-size:13px; line-height:1.5;">
              — Kawaii Advanced Technology &amp; Solution Limited
            </p>
          </div>
        </div>
      </div>
    `,
  });

  const [teamResult, confirmationResult] = await Promise.all([teamEmail, confirmationEmail]);

  if (teamResult.error) {
    console.error("Resend team notification failed:", teamResult.error);
    return NextResponse.json(
      { error: teamResult.error.message || "Failed to send your message." },
      { status: 502 }
    );
  }

  if (confirmationResult.error) {
    console.error("Resend confirmation email failed:", confirmationResult.error);
  }

  return NextResponse.json({ success: true });
}
