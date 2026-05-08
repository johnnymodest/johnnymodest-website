"use server";

import { Resend } from "resend";
import { put } from "@vercel/blob";

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
  const results = await Promise.allSettled([
    resend.emails.send({
      from: "hello@johnnymodest.com",
      to: ["tudor@johnnymodest.com", "tudormarciu@gmail.com"],
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
    }),
    put(`briefs/${Date.now()}.json`, JSON.stringify(data, null, 2), {
      access: "private",
      contentType: "application/json",
    }),
  ]);

  const [emailResult, blobResult] = results;

  if (emailResult.status === "rejected") {
    console.error("Failed to send email:", emailResult.reason);
  } else if (emailResult.value.error) {
    console.error("Resend returned error:", emailResult.value.error);
  }

  if (blobResult.status === "rejected") {
    console.error("Failed to save to Vercel Blob:", blobResult.reason);
  }

  if (emailResult.status === "rejected" && blobResult.status === "rejected") {
    throw new Error("Failed to send brief. Please email hello@johnnymodest.com directly.");
  }
}
