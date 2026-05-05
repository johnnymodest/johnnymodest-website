import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's talk — Johnny Modest",
  description: "Send a brief. No automated responses.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
