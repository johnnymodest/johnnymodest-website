"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface BriefData {
  name: string;
  email: string;
  context: string;
  stuck: string;
  scope: string;
  timeline: string;
}

export async function sendBrief(data: BriefData) {
  const { error } = await resend.emails.send({
    from: "hello@johnnymodest.com",
    to: "hello@johnnymodest.com",
    replyTo: data.email,
    subject: `Brief from ${data.name || "someone"}`,
    text: [
      `Name: ${data.name || "—"}`,
      `Email: ${data.email || "—"}`,
      `Scope: ${data.scope || "—"}`,
      `Timeline: ${data.timeline || "—"}`,
      ``,
      `Company / context:`,
      `${data.context || "—"}`,
      ``,
      `What's stuck:`,
      `${data.stuck || "—"}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
