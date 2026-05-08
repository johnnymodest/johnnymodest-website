import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import DomainsSection from "@/components/sections/DomainsSection";
import SliderSection from "@/components/sections/SliderSection";
import ServicesSection from "@/components/sections/ServicesSection";
import RateSection from "@/components/sections/RateSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";

export const metadata: Metadata = {
  title: "Johnny Modest — Zero-nonsense product consulting",
  description:
    "Senior product leadership. I parachute in, fix the thing, and leave before I become furniture. From $80/hr.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SliderSection />
      <RateSection />
      <DomainsSection />
      <SelectedWorkSection />
    </>
  );
}
