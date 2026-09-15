"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ZoomIn, Award } from "lucide-react";
import { STUDIO_LOGOS, StudioLogoItem } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function LogoShowcase() {
  const [selectedLogo, setSelectedLogo] = useState<StudioLogoItem | null>(null);

  return (
    <section className="py-24 bg-[#0B0B0E] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E6C594]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="gold" className="gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#E6C594]" />
              ATELIER LOGO COLLECTION
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
              Selected Studio <span className="italic gold-gradient-text">Logos &amp; Marks.</span>
            </h2>
            <p className="text-base text-[#8C8C9A] font-light leading-relaxed">
              A curated presentation of 10 primary brand logos, monograms, symbol marks, and emblem systems crafted by Nuvora Studio.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8C8C9A] bg-white/5 px-4 py-2 rounded-full border border-white/10 self-start md:self-end">
            10 FEATURED STUDIO CREATIONS
          </div>
        </div>

        {/* 10 Logo Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STUDIO_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedLogo(logo)}
              className="group relative rounded-2xl glass-panel p-4 cursor-pointer overflow-hidden border border-white/10 hover:border-[#E6C594]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Logo Card Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#08080A] mb-3 border border-white/5">
                <Image
                  src={logo.image}
                  alt={logo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                />

                {/* Overlay Zoom Icon */}
                <div className="absolute inset-0 bg-[#08080A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#E6C594] text-[#08080A] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Logo Details */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#8C8C9A] uppercase tracking-wider block">
                  {logo.category}
                </span>
                <h4 className="text-sm font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors line-clamp-1">
                  {logo.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal View */}
      <AnimatePresence>
        {selectedLogo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#08080A]/95 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLogo(null)}
              className="fixed inset-0"
            />

            {/* Modal Lightbox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-3xl w-full glass-panel-gold rounded-3xl p-6 sm:p-8 z-10 space-y-6 text-[#F9F8F6] shadow-2xl border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-[#E6C594] hover:text-[#08080A] transition-colors focus:outline-none"
                aria-label="Close logo lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 pr-12">
                <span className="text-xs font-mono text-[#E6C594] uppercase tracking-widest">
                  {selectedLogo.category} • {selectedLogo.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#F9F8F6]">
                  {selectedLogo.title}
                </h3>
              </div>

              {/* Full Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#08080A] border border-white/10">
                <Image
                  src={selectedLogo.image}
                  alt={selectedLogo.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#8C8C9A]">
                <span>Nuvora Studio Original Creation</span>
                <span className="text-[#E6C594]">Vector Master &amp; Brand Insignia</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
