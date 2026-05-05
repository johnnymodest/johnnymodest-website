import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero Nonsense — Johnny Modest",
  description: "What we believe, in plain language.",
};

export default function ZeroNonsenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
