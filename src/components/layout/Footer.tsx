import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080A] border-t border-white/10 pt-20 pb-12 text-[#F9F8F6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6C594]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info with Image Avatar */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif-editorial tracking-wider text-[#F9F8F6]"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E6C594]/60 p-0.5 shrink-0 bg-[#111115]">
                <Image
                  src="https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg"
                  alt="Nuvora Studio Emblem"
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <div className="flex items-baseline gap-1.5">
                <span className="font-semibold">NUVORA</span>
                <span className="font-light italic text-[#E6C594]">STUDIO</span>
                <span className="w-2 h-2 rounded-full bg-[#E6C594] inline-block ml-0.5" />
              </div>
            </Link>
            <p className="text-base text-[#8C8C9A] max-w-sm leading-relaxed font-light">
              Independent freelance graphic designer specializing in logo design, brand identity systems, product packaging, social media graphics, and print collateral for global brands.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 text-xs font-mono tracking-widest text-[#E6C594] border border-[#E6C594]/30 rounded-full bg-[#E6C594]/5">
                TAGLINE: &ldquo;Design That Defines Your Brand.&rdquo;
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#8C8C9A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {["Work", "Services", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#F9F8F6]/80 hover:text-[#E6C594] transition-colors flex items-center gap-1 group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#E6C594]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Freelance Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-mono text-[#8C8C9A]">
              Direct Contact &amp; Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#8C8C9A] font-mono">
              <p className="text-[#F9F8F6] font-sans font-medium text-base">
                Independent Freelance Studio • Remote Global Services
              </p>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#E6C594] shrink-0" />
                <a
                  href="tel:9054353157"
                  className="text-[#E6C594] hover:underline font-semibold"
                >
                  +91 9054353157
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E6C594] shrink-0" />
                <a
                  href="mailto:Visheshj865@gmail.com"
                  className="text-[#E6C594] hover:underline font-semibold"
                >
                  Visheshj865@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-xs uppercase tracking-widest font-mono text-[#8C8C9A] mb-3">
                Social Atelier
              </h4>
              <div className="flex gap-4 text-xs font-mono tracking-wider">
                {[
                  { name: "Instagram", href: "#" },
                  { name: "Behance", href: "#" },
                  { name: "LinkedIn", href: "#" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="text-[#8C8C9A] hover:text-[#E6C594] transition-colors border-b border-transparent hover:border-[#E6C594] pb-0.5"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large Typography Watermark */}
        <div className="py-8 border-b border-white/5 text-center overflow-hidden">
          <span className="text-[12vw] leading-none font-serif-editorial font-bold text-white/[0.03] select-none tracking-tight block whitespace-nowrap">
            NUVORA STUDIO
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8C9A] font-mono gap-4">
          <p>© {currentYear} Nuvora Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Independent Freelance Designer</span>
            <span>•</span>
            <span>Worldwide Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
