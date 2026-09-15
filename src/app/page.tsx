import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HeroPreviewStrip from "@/components/sections/HeroPreviewStrip";
import LogoShowcase from "@/components/sections/LogoShowcase";
import PackagingShowcase from "@/components/sections/PackagingShowcase";
import SocialMediaShowcase from "@/components/sections/SocialMediaShowcase";
import BrandTicker from "@/components/sections/BrandTicker";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Services from "@/components/sections/Services";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import StatsSection from "@/components/sections/StatsSection";
import Testimonials from "@/components/sections/Testimonials";
import InquiryForm from "@/components/sections/InquiryForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080A] text-[#F9F8F6] relative">
      <Navbar />
      <Hero />
      <HeroPreviewStrip />
      <LogoShowcase />
      <PackagingShowcase />
      <SocialMediaShowcase />
      <BrandTicker />
      <PortfolioGrid />
      <Services />
      <ProcessTimeline />
      <StatsSection />
      <Testimonials />
      <InquiryForm />
      <FAQ />
      <Footer />
    </main>
  );
}
