"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES, Service } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function Services() {
  // Store array of open accordion service IDs (allows multiple or single toggle)
  const [openIds, setOpenIds] = useState<string[]>(["brand-identity"]);

  const toggleService = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="services" className="py-28 bg-[#08080A] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles className="w-3 h-3" />
            STUDIO CAPABILITIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
            Capabilities shaped around <span className="italic gold-gradient-text">clarity.</span>
          </h2>
          <p className="text-base text-[#8C8C9A] font-light">
            We operate at the intersection of brand strategy, spatial editorial typography, luxury packaging, and digital web craft.
          </p>
        </div>

        {/* Services Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service: Service) => {
            const isOpen = openIds.includes(service.id);

            return (
              <div key={service.id} className="group py-8 transition-colors">
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#E6C594]/50 py-2 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="text-sm sm:text-base font-mono text-[#E6C594] font-semibold">
                      {service.number}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F9F8F6] group-hover:border-[#E6C594] group-hover:text-[#E6C594] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-4 pl-12 sm:pl-20 grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Service Description */}
                        <div className="md:col-span-6 space-y-4">
                          <p className="text-base text-[#8C8C9A] leading-relaxed font-light">
                            {service.description}
                          </p>

                          <div className="pt-2">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 text-xs font-mono text-[#E6C594] hover:underline"
                            >
                              <span>Book {service.title} Brief</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Service Deliverables Pills */}
                        <div className="md:col-span-6 space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6]">
                            KEY DELIVERABLES
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((item) => (
                              <span
                                key={item}
                                className="text-xs font-mono bg-white/5 border border-white/10 text-[#F9F8F6] px-3.5 py-1.5 rounded-full"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
