"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-28 bg-[#08080A] border-t border-white/10 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="gold" className="gap-1.5 mx-auto">
            <HelpCircle className="w-3 h-3" />
            FREQUENT INQUIRIES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6]">
            Frequently asked <span className="italic gold-gradient-text">questions.</span>
          </h2>
          <p className="text-base text-[#8C8C9A] font-light max-w-xl mx-auto">
            Everything you need to know about partnering with Nuvora Studio on your brand vision.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="glass-panel rounded-2xl border border-white/10 hover:border-[#E6C594]/30 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#E6C594]/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-serif-editorial text-[#F9F8F6] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#E6C594] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#E6C594]/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm text-[#8C8C9A] font-light leading-relaxed">
                        {item.answer}
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
