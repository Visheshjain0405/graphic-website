import { BRAND_CLIENTS } from "@/lib/data";

export default function BrandTicker() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...BRAND_CLIENTS, ...BRAND_CLIENTS, ...BRAND_CLIENTS];

  return (
    <section className="py-10 border-y border-white/10 bg-[#08080A]/60 backdrop-blur-md overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between">
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C8C9A]">
          Sample Brand Showcase &amp; Design Archives
        </span>
        <span className="text-[10px] font-mono text-[#E6C594]/70">
          * Fictional client placeholders for demonstration
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative w-full group">
        {/* Gradient Edge Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#08080A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#08080A] to-transparent z-10 pointer-events-none" />

        <div className="flex min-w-full shrink-0 gap-16 items-center animate-marquee">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand}-${idx}`}
              className="flex items-center gap-16 text-xl md:text-2xl font-serif-editorial text-[#8C8C9A]/70 hover:text-[#E6C594] transition-colors cursor-default whitespace-nowrap tracking-widest"
            >
              <span>{brand}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6C594]/40" />
            </div>
          ))}
        </div>

        <div className="flex min-w-full shrink-0 gap-16 items-center animate-marquee aria-hidden='true'">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand}-dup-${idx}`}
              className="flex items-center gap-16 text-xl md:text-2xl font-serif-editorial text-[#8C8C9A]/70 hover:text-[#E6C594] transition-colors cursor-default whitespace-nowrap tracking-widest"
            >
              <span>{brand}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6C594]/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animation in inline style tag or tailwind extension */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
