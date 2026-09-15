"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Sparkles, Loader2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const PROJECT_TYPES = [
  "Logo Design",
  "Brand Identity",
  "Packaging",
  "Product Design",
  "Marketing Materials",
  "Social Media",
  "Stationery",
  "Other",
];

const BUDGET_RANGES = [
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "To be discussed",
];

const TIMELINES = ["ASAP", "1–2 Weeks", "3–4 Weeks", "Flexible"];

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Logo Design",
    budgetRange: "₹25,000 – ₹50,000",
    timeline: "1–2 Weeks",
    brief: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.brief.trim()) {
      newErrors.brief = "Please provide a short project brief";
    } else if (formData.brief.trim().length < 10) {
      newErrors.brief = "Brief must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate direct freelance submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#08080A] border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column Intro Header */}
        <div className="lg:col-span-5 space-y-6">
          <Badge variant="gold" className="gap-1.5">
            <Sparkles className="w-3 h-3" />
            DIRECT FREELANCE INQUIRIES
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-medium text-[#F9F8F6] leading-tight">
            Let&apos;s create something <span className="italic gold-gradient-text">considered.</span>
          </h2>

          <p className="text-base text-[#8C8C9A] font-light leading-relaxed">
            As an independent freelance graphic designer, I work directly with founders and brands worldwide. Send a brief or call directly to discuss your project.
          </p>

          <div className="space-y-4 pt-6 border-t border-white/10 text-sm font-mono text-[#8C8C9A]">
            <div className="space-y-1">
              <span className="text-[#F9F8F6] block font-sans font-medium text-base">Direct Phone &amp; WhatsApp</span>
              <a href="tel:9054353157" className="text-[#E6C594] hover:underline flex items-center gap-2 text-base font-semibold">
                <Phone className="w-4 h-4" />
                <span>+91 9054353157</span>
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-[#F9F8F6] block font-sans font-medium text-base">Email Inquiries</span>
              <a href="mailto:Visheshj865@gmail.com" className="text-[#E6C594] hover:underline flex items-center gap-2 text-base font-semibold">
                <Mail className="w-4 h-4" />
                <span>Visheshj865@gmail.com</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-[#8C8C9A]">
              <span>Remote Freelance Atelier • Worldwide Client Services</span>
            </div>
          </div>
        </div>

        {/* Right Column Form Box */}
        <div className="lg:col-span-7">
          <div className="glass-panel-gold p-8 sm:p-12 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#E6C594]/20 border border-[#E6C594] text-[#E6C594] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif-editorial text-[#F9F8F6]">
                  Inquiry Transmitted
                </h3>
                <p className="text-sm text-[#8C8C9A] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Your brief has been sent to Visheshj865@gmail.com. I will contact you shortly via phone (+91 9054353157) or email.
                </p>
                <div className="p-3 bg-white/5 rounded-xl text-xs font-mono text-[#E6C594] max-w-xs mx-auto">
                  * Direct Contact Request Active
                </div>
                <Button
                  variant="gold-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      projectType: "Logo Design",
                      budgetRange: "₹25,000 – ₹50,000",
                      timeline: "1–2 Weeks",
                      brief: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Full Name <span className="text-[#E6C594]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya"
                      className={`w-full bg-[#08080A] border ${
                        errors.fullName ? "border-red-500" : "border-white/10"
                      } rounded-xl px-4 py-3 text-sm text-[#F9F8F6] placeholder-[#8C8C9A]/50 focus:outline-none focus:border-[#E6C594] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Email Address <span className="text-[#E6C594]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@brand.com"
                      className={`w-full bg-[#08080A] border ${
                        errors.email ? "border-red-500" : "border-white/10"
                      } rounded-xl px-4 py-3 text-sm text-[#F9F8F6] placeholder-[#8C8C9A]/50 focus:outline-none focus:border-[#E6C594] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mobile Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Mobile / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 9054353157"
                      className="w-full bg-[#08080A] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F9F8F6] placeholder-[#8C8C9A]/50 focus:outline-none focus:border-[#E6C594] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Æthel Brand"
                      className="w-full bg-[#08080A] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F9F8F6] placeholder-[#8C8C9A]/50 focus:outline-none focus:border-[#E6C594] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type Options */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                          formData.projectType === type
                            ? "bg-[#E6C594] text-[#08080A] font-semibold"
                            : "bg-[#08080A] text-[#8C8C9A] border border-white/10 hover:text-[#F9F8F6]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div className="space-y-2">
                    <label htmlFor="budgetRange" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Estimated Budget Scope
                    </label>
                    <select
                      id="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#08080A] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F9F8F6] focus:outline-none focus:border-[#E6C594] transition-colors"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b} className="bg-[#08080A] text-[#F9F8F6]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#08080A] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F9F8F6] focus:outline-none focus:border-[#E6C594] transition-colors"
                    >
                      {TIMELINES.map((t) => (
                        <option key={t} value={t} className="bg-[#08080A] text-[#F9F8F6]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="space-y-2">
                  <label htmlFor="brief" className="text-xs font-mono uppercase tracking-widest text-[#F9F8F6] block">
                    Project Brief &amp; Goals <span className="text-[#E6C594]">*</span>
                  </label>
                  <textarea
                    id="brief"
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Tell us about your brand positioning, deliverables needed, and timeline..."
                    className={`w-full bg-[#08080A] border ${
                      errors.brief ? "border-red-500" : "border-white/10"
                    } rounded-xl px-4 py-3 text-sm text-[#F9F8F6] placeholder-[#8C8C9A]/50 focus:outline-none focus:border-[#E6C594] transition-colors resize-none`}
                  />
                  {errors.brief && (
                    <p className="text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.brief}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Brief to Visheshj865@gmail.com</span>
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
