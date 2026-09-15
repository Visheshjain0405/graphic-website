import { PROCESS_STEPS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Compass } from "lucide-react";

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-28 bg-[#08080A] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <Badge variant="gold" className="gap-1.5">
            <Compass className="w-3 h-3" />
            STUDIO METHODOLOGY
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
            From first thought to <span className="italic gold-gradient-text">lasting impression.</span>
          </h2>
          <p className="text-base text-[#8C8C9A] font-light">
            Our disciplined four-step methodology ensures every project balances aesthetic beauty with strategic rigor.
          </p>
        </div>

        {/* Vertical Timeline Steps */}
        <div className="relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E6C594]/50 via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-16 relative">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Card Info */}
                  <div className="w-full md:w-1/2 space-y-4 glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#E6C594]/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#E6C594] tracking-widest uppercase">
                        STAGE {step.number}
                      </span>
                      <span className="text-xs font-mono text-[#8C8C9A] bg-white/5 px-3 py-1 rounded-full">
                        {step.tagline}
                      </span>
                    </div>

                    <h3 className="text-3xl font-serif-editorial text-[#F9F8F6]">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#8C8C9A] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Timeline Node */}
                  <div className="relative z-10 flex items-center justify-center shrink-0">
                    <div className="w-12 h-12 rounded-full glass-panel-gold flex items-center justify-center text-sm font-mono font-bold text-[#E6C594] shadow-lg border border-[#E6C594]">
                      {step.number}
                    </div>
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
