import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { PainSection } from "@/components/PainSection";
import { FounderSection } from "@/components/FounderSection";
import { ToolSection } from "@/components/ToolSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink-black">
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <PainSection />
      <FounderSection />
      <ToolSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
