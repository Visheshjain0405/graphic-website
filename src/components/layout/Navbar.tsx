"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#08080A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with Header Image */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-lg md:text-xl font-serif-editorial tracking-wider text-[#F9F8F6] hover:text-[#E6C594] transition-colors"
          >
            {/* Header Brand Image Avatar */}
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#E6C594]/50 p-0.5 group-hover:border-[#E6C594] transition-colors shrink-0 bg-[#111115]">
              <Image
                src="https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg"
                alt="Nuvora Studio Emblem"
                fill
                className="object-cover rounded-full group-hover:scale-110 transition-transform"
              />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold tracking-wider">NUVORA</span>
              <span className="font-light italic text-[#E6C594] text-base">STUDIO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6C594] inline-block ml-0.5 group-hover:scale-150 transition-transform" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 rounded-full px-8 py-2.5 glass-panel border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-[#8C8C9A] hover:text-[#E6C594] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E6C594] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Direct Contact Info & Action button */}
          <div className="flex items-center gap-4">
            <a
              href="tel:9054353157"
              className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#8C8C9A] hover:text-[#E6C594] transition-colors border border-white/10 px-3 py-1.5 rounded-full bg-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C594]" />
              <span>+91 9054353157</span>
            </a>

            <a href="#contact" className="hidden sm:inline-block">
              <Button variant="gold-outline" size="sm">
                Request a Project
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full glass-panel text-[#F9F8F6] hover:text-[#E6C594] focus:outline-none focus:ring-2 focus:ring-[#E6C594]/50"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#08080A]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 pt-28"
          >
            {/* Drawer Header Brand Avatar */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E6C594] shrink-0">
                <Image
                  src="https://i.pinimg.com/736x/87/1a/16/871a16d026c2e3e514940b69a9c6b098.jpg"
                  alt="Nuvora Studio Emblem"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif-editorial text-lg font-semibold text-[#F9F8F6] block">
                  NUVORA STUDIO
                </span>
                <span className="text-[11px] font-mono text-[#E6C594]">
                  Independent Graphic Designer
                </span>
              </div>
            </div>

            {/* Drawer Links */}
            <nav className="flex flex-col gap-5 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-2xl font-serif-editorial text-[#F9F8F6] hover:text-[#E6C594] flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8C8C9A]" />
                </motion.a>
              ))}
            </nav>

            {/* Drawer Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono text-[#8C8C9A]"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E6C594]" />
                <a href="tel:9054353157" className="text-[#F9F8F6] hover:text-[#E6C594]">
                  +91 9054353157
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E6C594]" />
                <a href="mailto:Visheshj865@gmail.com" className="text-[#F9F8F6] hover:text-[#E6C594]">
                  Visheshj865@gmail.com
                </a>
              </div>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="lg" className="w-full justify-between mt-2">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
