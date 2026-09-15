import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#111115] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="space-y-3 p-6 rounded-2xl bg-[#08080A]/60 border border-white/5 hover:border-[#E6C594]/30 transition-colors"
            >
              <span className="text-4xl sm:text-6xl font-serif-editorial font-bold gold-gradient-text block">
                {stat.value}
              </span>
              <h4 className="text-sm font-medium text-[#F9F8F6] font-sans">
                {stat.label}
              </h4>
              <p className="text-xs text-[#8C8C9A] font-light leading-relaxed">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
