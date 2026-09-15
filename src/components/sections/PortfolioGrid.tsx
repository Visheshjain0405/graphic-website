"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Palette,
  Type,
  Package,
  Camera,
  Megaphone,
  Share2,
  FileText,
  Grid,
  LayoutList,
} from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject, PortfolioCategory } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const CATEGORIES: { label: PortfolioCategory; icon: React.ElementType }[] = [
  { label: "All Work", icon: Sparkles },
  { label: "Logo Design", icon: Palette },
  { label: "Brand Identity", icon: Layers },
  { label: "Packaging", icon: Package },
  { label: "Product Design", icon: Camera },
  { label: "Marketing Materials", icon: Megaphone },
  { label: "Social Media", icon: Share2 },
  { label: "Stationery", icon: FileText },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Work");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter projects by active tab
  const filteredProjects =
    activeCategory === "All Work"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const selectedProject = selectedProjectIndex !== null ? PORTFOLIO_PROJECTS[selectedProjectIndex] : null;

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProjectIndex !== null) {
        setSelectedProjectIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex]);

  const handleNextProject = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex + 1) % PORTFOLIO_PROJECTS.length);
  };

  const handlePrevProject = () => {
    if (selectedProjectIndex === null) return;
    setSelectedProjectIndex((selectedProjectIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length);
  };

  // Helper count for each category
  const getCategoryCount = (category: PortfolioCategory) => {
    if (category === "All Work") return PORTFOLIO_PROJECTS.length;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === category).length;
  };

  return (
    <section id="work" className="py-32 bg-[#08080A] relative z-10 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E6C594]/5 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Redesigned Section Header */}
        <div className="relative rounded-3xl glass-panel-gold p-8 sm:p-12 mb-16 overflow-hidden border border-[#E6C594]/20 shadow-2xl">
          {/* Subtle background graphic lines */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E6C594]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-6 max-w-3xl">
              {/* Badge & Meta */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="gold" className="gap-2 px-3.5 py-1 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6C594]" />
                  SELECTED CREATIVE ARCHIVES
                </Badge>
                <span className="text-xs font-mono text-[#8C8C9A] tracking-widest uppercase">
                  ATELIER PORTFOLIO • 2026/27
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-6xl font-serif-editorial font-medium text-[#F9F8F6] leading-[1.08] tracking-tight">
                A Collection of{" "}
                <span className="italic font-normal gold-gradient-text block sm:inline">
                  Visual Identities.
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#8C8C9A] font-light leading-relaxed max-w-2xl">
                From distinctive vector logos and complete brand systems to packaging dielines, product presentation visuals, and campaign materials, we create design that gives every brand a recognizable presence.
              </p>
            </div>

            {/* Right Side Stats & View Mode Switcher */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-6 shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              <div className="space-y-1 text-left lg:text-right">
                <span className="text-3xl font-serif-editorial font-bold gold-gradient-text block">
                  {PORTFOLIO_PROJECTS.length} Masterworks
                </span>
                <span className="text-xs font-mono text-[#8C8C9A] block">
                  07 Core Graphic Disciplines
                </span>
              </div>

              {/* View Layout Toggle */}
              <div className="flex items-center gap-1 bg-[#08080A]/90 p-1.5 rounded-full border border-white/10">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                    viewMode === "grid"
                      ? "bg-[#E6C594] text-[#08080A] font-semibold"
                      : "text-[#8C8C9A] hover:text-[#F9F8F6]"
                  }`}
                  aria-label="Grid Layout View"
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full text-xs font-mono flex items-center gap-1.5 transition-all ${
                    viewMode === "list"
                      ? "bg-[#E6C594] text-[#08080A] font-semibold"
                      : "text-[#8C8C9A] hover:text-[#F9F8F6]"
                  }`}
                  aria-label="List Layout View"
                >
                  <LayoutList className="w-4 h-4" />
                  <span className="hidden sm:inline">Expanded</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Atelier Segmented Filter Bar */}
        <div className="mb-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 p-2 glass-panel rounded-2xl border border-white/10 min-w-max">
            {CATEGORIES.map(({ label, icon: Icon }) => {
              const isActive = activeCategory === label;
              const count = getCategoryCount(label);

              return (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 select-none ${
                    isActive
                      ? "text-[#08080A] font-semibold shadow-lg"
                      : "text-[#8C8C9A] hover:text-[#F9F8F6] hover:bg-white/5"
                  }`}
                >
                  {/* Sliding Active Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#E6C594] to-[#B89357] rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? "text-[#08080A]" : "text-[#E6C594]"}`} />
                  <span className="relative z-10">{label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? "bg-[#08080A]/20 text-[#08080A]"
                        : "bg-white/10 text-[#8C8C9A]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Gallery Display */}
        {viewMode === "grid" ? (
          /* Grid View Mode */
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const globalIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === project.id);
                const isLarge = project.featured;
                const colSpanClass = isLarge ? "lg:col-span-8" : "lg:col-span-4";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                    onClick={() => setSelectedProjectIndex(globalIndex)}
                    className={`group relative rounded-2xl glass-panel p-6 cursor-pointer overflow-hidden border border-white/10 hover:border-[#E6C594]/60 transition-all duration-500 hover:-translate-y-1 shadow-xl ${colSpanClass}`}
                  >
                    {/* Visual Card Image */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111115] mb-6 border border-white/5">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <Badge variant="gold">{project.category}</Badge>
                        <span className="text-xs font-mono bg-[#08080A]/90 backdrop-blur-md px-3 py-1 rounded-full text-[#E6C594] border border-white/10">
                          {project.year}
                        </span>
                      </div>

                      {/* Hover Arrow Trigger Button */}
                      <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#E6C594] text-[#08080A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-xl">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Text Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#8C8C9A]">
                          CLIENT: {project.client || "Studio Portfolio"}
                        </span>
                        <span className="text-[10px] font-mono text-[#E6C594]/80">
                          Inspect Case Study
                        </span>
                      </div>

                      <h3 className="text-2xl font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#8C8C9A] line-clamp-2 font-light">
                        {project.summary}
                      </p>

                      {/* Deliverable Tags */}
                      <div className="pt-3 flex flex-wrap gap-2">
                        {project.services.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="text-[11px] font-mono text-[#8C8C9A] bg-white/5 px-2.5 py-1 rounded border border-white/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* List / Expanded View Mode */
          <div className="space-y-6">
            {filteredProjects.map((project) => {
              const globalIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === project.id);

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectIndex(globalIndex)}
                  className="group relative rounded-2xl glass-panel p-6 cursor-pointer overflow-hidden border border-white/10 hover:border-[#E6C594]/60 transition-all duration-300 flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="relative w-full md:w-80 aspect-[16/10] rounded-xl overflow-hidden bg-[#111115] shrink-0">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-3 w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="gold">{project.category}</Badge>
                      <span className="text-xs font-mono text-[#8C8C9A]">
                        YEAR: {project.year} • CLIENT: {project.client || "Studio Archive"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#F9F8F6] group-hover:text-[#E6C594] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[#8C8C9A] font-light leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((s) => (
                          <span key={s} className="text-xs font-mono bg-white/5 text-[#8C8C9A] px-2.5 py-1 rounded">
                            {s}
                          </span>
                        ))}
                      </div>

                      <Button variant="gold-outline" size="sm" className="group-hover:bg-[#E6C594] group-hover:text-[#08080A]">
                        <span>Open Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Comprehensive Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#08080A]/95 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProjectIndex(null)}
              className="fixed inset-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-panel-gold rounded-3xl p-6 sm:p-10 z-10 space-y-8 my-auto text-[#F9F8F6] shadow-2xl border-white/20"
            >
              {/* Modal Top Control Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <Badge variant="gold">{selectedProject.category}</Badge>
                  <span className="text-xs font-mono text-[#8C8C9A]">
                    CASE STUDY • {selectedProject.year}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevProject}
                    className="p-2 rounded-full bg-white/5 hover:bg-[#E6C594] hover:text-[#08080A] transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextProject}
                    className="p-2 rounded-full bg-white/5 hover:bg-[#E6C594] hover:text-[#08080A] transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProjectIndex(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#E6C594] hover:text-[#08080A] transition-colors ml-2"
                    aria-label="Close project detail modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Client Overview */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#8C8C9A] tracking-widest uppercase">
                  CLIENT: {selectedProject.client || "Studio Portfolio Archive"}
                </span>
                <h3 id="modal-title" className="text-3xl sm:text-5xl font-serif-editorial text-[#F9F8F6]">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Main Cover Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#111115] border border-white/10">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Detailed Design Case Study Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column Description */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-mono text-[#E6C594] mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      GRAPHIC DESIGN BRIEF &amp; OVERVIEW
                    </h4>
                    <p className="text-base text-[#8C8C9A] leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Brand Color Palette */}
                  {selectedProject.colorPalette && (
                    <div className="space-y-2 pt-2">
                      <h5 className="text-xs font-mono text-[#F9F8F6] uppercase flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-[#E6C594]" />
                        BRAND COLOR SYSTEM
                      </h5>
                      <div className="flex gap-2">
                        {selectedProject.colorPalette.map((hex) => (
                          <div key={hex} className="flex flex-col items-center gap-1">
                            <div
                              className="w-10 h-10 rounded-lg border border-white/20 shadow-md"
                              style={{ backgroundColor: hex }}
                            />
                            <span className="text-[10px] font-mono text-[#8C8C9A]">{hex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Typography Pairings */}
                  {selectedProject.typography && (
                    <div className="space-y-2 pt-2">
                      <h5 className="text-xs font-mono text-[#F9F8F6] uppercase flex items-center gap-1.5">
                        <Type className="w-3.5 h-3.5 text-[#E6C594]" />
                        SELECTED TYPOGRAPHY
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.typography.map((font) => (
                          <span
                            key={font}
                            className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[#F9F8F6]"
                          >
                            {font}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column Services & Action */}
                <div className="md:col-span-5 space-y-6 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-[#F9F8F6]">
                    DELIVERABLES PRODUCED
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.services.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#8C8C9A]">
                        <CheckCircle2 className="w-4 h-4 text-[#E6C594] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <p className="text-[11px] font-mono text-[#8C8C9A]">
                      Interested in similar graphic branding, logo design, or packaging?
                    </p>
                    <a href="#contact" onClick={() => setSelectedProjectIndex(null)}>
                      <Button variant="primary" size="md" className="w-full">
                        Inquire Similar Project
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Design Asset Gallery Grid */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#E6C594]">
                  MATERIAL SHOWCASE GALLERY
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedProject.images.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#111115] border border-white/10"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${selectedProject.title} artwork ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
