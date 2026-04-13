import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { FeatureTabs } from "@/components/landing/FeatureTabs";
import { IntegrationsGrid } from "@/components/landing/IntegrationsGrid";
import { LiveNumbers } from "@/components/landing/LiveNumbers";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Roadmap } from "@/components/landing/Roadmap";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <FeatureTabs />
      <IntegrationsGrid />
      <LiveNumbers />
      <ComparisonTable />
      <Roadmap />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
