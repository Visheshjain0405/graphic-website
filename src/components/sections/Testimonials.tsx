"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 bg-[#08080A] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="gold" className="gap-1.5">
              <Sparkles className="w-3 h-3" />
              CLIENT REFLECTIONS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
              Words from <span className="italic gold-gradient-text">visionary leaders.</span>
            </h2>
          </div>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full glass-panel hover:bg-[#E6C594] hover:text-[#08080A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E6C594]"
              aria-label="Previous testimonial slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full glass-panel hover:bg-[#E6C594] hover:text-[#08080A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E6C594]"
              aria-label="Next testimonial slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Active Card */}
        <div className="relative rounded-3xl glass-panel-gold p-8 sm:p-14 min-h-[320px] flex flex-col justify-between overflow-hidden shadow-2xl">
          <Quote className="w-16 h-16 text-[#E6C594]/20 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 relative z-10"
            >
              <p className="text-2xl sm:text-4xl font-serif-editorial italic font-normal text-[#F9F8F6] leading-relaxed max-w-4xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#F9F8F6]">
                    {current.name}
                  </h4>
                  <p className="text-xs font-mono text-[#8C8C9A]">
                    {current.role} • <span className="text-[#E6C594]">{current.company}</span>
                  </p>
                </div>

                {current.isSample && (
                  <span className="text-[10px] font-mono text-[#8C8C9A]/70 hidden sm:inline-block">
                    * Sample Endorsement Placeholder
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Pagination Dots */}
          <div className="flex gap-2 pt-6">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#E6C594]" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
