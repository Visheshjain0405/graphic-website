"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, PackageCheck } from "lucide-react";
import { STUDIO_PACKAGING, StudioPackagingItem } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function PackagingShowcase() {
  const [selectedPkg, setSelectedPkg] = useState<StudioPackagingItem | null>(null);

  return (
    <section className="py-24 bg-[#08080A] border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#E6C594]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="gold" className="gap-1.5">
              <PackageCheck className="w-3.5 h-3.5 text-[#E6C594]" />
              ATELIER PACKAGING COLLECTION
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
              Selected Product <span className="italic gold-gradient-text">Packaging &amp; Vessels.</span>
            </h2>
            <p className="text-base text-[#8C8C9A] font-light leading-relaxed">
              Tactile product box packaging dielines, amber glass bottle labels, pouches, and luxury unboxing sleeves created by Nuvora Studio.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8C8C9A] bg-white/5 px-4 py-2 rounded-full border border-white/10 self-start md:self-end">
            05 FEATURED PACKAGING CREATIONS
          </div>
        </div>

        {/* 5 Packaging Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STUDIO_PACKAGING.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              onClick={() => setSelectedPkg(pkg)}
              className="group relative rounded-2xl glass-panel p-4 cursor-pointer overflow-hidden border border-white/10 hover:border-[#E6C594]/60 transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Packaging Card Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#08080A] mb-3 border border-white/5">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
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

              {/* Packaging Details */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#8C8C9A] uppercase tracking-wider block">
                  {pkg.category}
                </span>
                <h4 className="text-sm font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors line-clamp-1">
                  {pkg.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal View */}
      <AnimatePresence>
        {selectedPkg && (
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
              onClick={() => setSelectedPkg(null)}
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
                onClick={() => setSelectedPkg(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-[#E6C594] hover:text-[#08080A] transition-colors focus:outline-none"
                aria-label="Close packaging lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1 pr-12">
                <span className="text-xs font-mono text-[#E6C594] uppercase tracking-widest">
                  {selectedPkg.category} • {selectedPkg.year}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#F9F8F6]">
                  {selectedPkg.title}
                </h3>
              </div>

              {/* Full Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#08080A] border border-white/10">
                <Image
                  src={selectedPkg.image}
                  alt={selectedPkg.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-[#8C8C9A]">
                <span>Nuvora Studio Packaging Creation</span>
                <span className="text-[#E6C594]">Box Architecture &amp; Print Specs</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
