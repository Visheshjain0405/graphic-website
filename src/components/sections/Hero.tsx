"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Sparkles, Compass, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Check reduced motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.2 }
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0 },
          "-=0.6"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.6"
        )
        .fromTo(
          visualCardRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6C594]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#B89357]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex flex-wrap items-center gap-3">
            <Badge variant="gold" className="gap-1.5">
              <Sparkles className="w-3 h-3 text-[#E6C594]" />
              INDEPENDENT FREELANCE GRAPHIC DESIGNER
            </Badge>
            <span className="text-xs text-[#8C8C9A] font-mono tracking-widest">
              REMOTE GLOBAL SERVICES
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-6xl md:text-7xl font-serif-editorial font-medium leading-[1.08] tracking-tight text-[#F9F8F6]"
          >
            Design That Defines Your{" "}
            <span className="italic font-normal gold-gradient-text">Brand.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={descRef}
            className="text-lg md:text-xl text-[#8C8C9A] max-w-2xl font-light leading-relaxed"
          >
            Crafting distinctive logo marks, brand identities, product packaging, social media graphics, and print materials for ambitious enterprises and founders worldwide.
          </p>

          {/* Direct Freelance Contact Badges */}
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#E6C594]">
            <a
              href="tel:9054353157"
              className="flex items-center gap-2 bg-[#E6C594]/10 border border-[#E6C594]/30 px-3.5 py-2 rounded-full hover:bg-[#E6C594]/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9054353157</span>
            </a>
            <a
              href="mailto:Visheshj865@gmail.com"
              className="flex items-center gap-2 bg-[#E6C594]/10 border border-[#E6C594]/30 px-3.5 py-2 rounded-full hover:bg-[#E6C594]/20 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Visheshj865@gmail.com</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact">
              <Button variant="primary" size="lg">
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#work">
              <Button variant="gold-outline" size="lg">
                <Compass className="w-4 h-4 mr-1 text-[#E6C594]" />
                <span>Explore Full Portfolio</span>
              </Button>
            </a>
          </div>

          {/* Atelier Trust Badges */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap gap-8 text-xs font-mono text-[#8C8C9A]">
            <div>
              <span className="text-[#F9F8F6] font-semibold block text-base font-sans">100%</span>
              Custom Vector Craft
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-[#E6C594] font-semibold block text-base font-sans">07</span>
              Graphic Disciplines
            </div>
            <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-[#F9F8F6] font-semibold block text-base font-sans">Global</span>
              Freelance Client Service
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Branding Preview Card */}
        <div ref={visualCardRef} className="lg:col-span-5 relative">
          <div className="relative rounded-2xl glass-panel-gold p-8 overflow-hidden shadow-2xl group">
            {/* Card Graphic Decorative Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#E6C594]/5 opacity-60" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#E6C594] tracking-widest uppercase">
                  FREELANCE STUDIO • N° 01
                </span>
                <span className="text-xs text-[#8C8C9A] font-mono">2026/27</span>
              </div>

              {/* Sample Visual Monogram Emblem */}
              <div className="h-56 rounded-xl bg-[#08080A] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-[#E6C594]/40 transition-colors">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E6C594]/10 rounded-full blur-xl group-hover:bg-[#E6C594]/20 transition-all" />

                <div className="flex justify-between items-start">
                  <span className="text-3xl font-serif-editorial italic text-[#E6C594]">
                    N&amp;S
                  </span>
                  <Badge variant="subtle">Freelance Portfolio</Badge>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-mono text-[#8C8C9A] uppercase tracking-wider">
                    DIRECT CONTACT DESIGN SERVICE
                  </p>
                  <p className="text-xl font-serif-editorial text-[#F9F8F6]">
                    Nuvora Studio
                  </p>
                </div>
              </div>

              {/* Card Metadata list */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#8C8C9A]">
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-[#E6C594] block font-sans text-sm font-medium">+91 9054353157</span>
                  Mobile Contact
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-white block font-sans text-sm font-medium line-clamp-1">Visheshj865@gmail.com</span>
                  Email Inquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
