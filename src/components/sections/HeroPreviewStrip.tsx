"use client";

import Image from "next/image";
import { HERO_PREVIEW_ITEMS } from "@/lib/data";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function HeroPreviewStrip() {
  return (
    <section className="py-16 bg-[#08080A] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Strip Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E6C594] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GRAPHIC DESIGN MATERIALS SHOWCASE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#F9F8F6]">
              Visual Brand Architecture at a Glance
            </h3>
          </div>

          <a
            href="#work"
            className="text-xs font-mono text-[#E6C594] hover:underline flex items-center gap-1 self-start md:self-end"
          >
            <span>Explore Full Graphic Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Visual Preview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HERO_PREVIEW_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#work"
              className="group relative rounded-2xl glass-panel p-4 overflow-hidden border border-white/10 hover:border-[#E6C594]/50 transition-all duration-500 block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111115] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-[#08080A]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#E6C594] border border-white/10">
                  {item.tag}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#8C8C9A] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h4 className="text-lg font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8C8C9A] font-light line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
