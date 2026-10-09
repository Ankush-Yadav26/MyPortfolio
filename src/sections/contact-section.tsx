"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, Clock3 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const [status, setStatus] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("Message sent successfully. I will get back to you soon.");
      form.reset();
    } else {
      setStatus("Unable to send message right now. Please email me directly.");
    }
  };

  return (
    <AnimatedSection id="contact" className="mt-28">
      <SectionHeading title="Get In Touch" subtitle="Let's collaborate and build something meaningful, scalable, and beautifully crafted." />
      <div className="grid gap-7 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <h3 className="text-3xl font-bold text-white">Let&apos;s Talk</h3>
          <p className="mt-2 text-sm text-emerald-400">Available for new projects</p>
          <p className="mt-4 text-gray-400">
            I&apos;m always open to discussing new opportunities, freelance projects, and product collaborations.
          </p>
          <div className="mt-7 space-y-3">
            <p className="inline-flex items-center gap-2 text-gray-200">
              <Mail className="size-4 text-cyan-300" />
              ankush.ahir08@gmail.com
            </p>
            <p className="inline-flex items-center gap-2 text-gray-200">
              <Phone className="size-4 text-cyan-300" />
              <span>+91 70817 69055</span>
            </p>
            <p className="inline-flex items-center gap-2 text-gray-200">
              <Clock3 className="size-4 text-cyan-300" />
              Response within 24 hours
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <h3 className="text-3xl font-bold text-white">Send Me a Message</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" />
            <input required type="email" name="email" placeholder="Your email" className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" />
          </div>
          <input required name="subject" placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" />
          <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" />
          <button type="submit" className="rounded-xl bg-gradient-to-r from-cyan-500 to-rose-500 px-6 py-3 font-semibold text-white">
            Send Message
          </button>
          {status ? <p className="text-sm text-gray-300">{status}</p> : null}
        </form>
      </div>
    </AnimatedSection>
  );
}
