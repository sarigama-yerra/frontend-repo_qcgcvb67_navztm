import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const mailto = `mailto:kanigantiabhishek07@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      name || 'Someone'
    )}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`;
    window.location.href = mailto;
    setStatus('Opening your email client...');
  };

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-orange-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-orange-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white placeholder-white/40 outline-none ring-0 focus:border-orange-400"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
              {status && <p className="text-sm text-white/70">{status}</p>}
            </div>
          </form>

          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <h3 className="text-lg font-semibold">Let’s build something</h3>
              <p className="mt-2 text-white/80">
                I’m available for full-time roles, freelance projects, and collaborations.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:kanigantiabhishek07@gmail.com"
                className="inline-flex items-center gap-3 text-orange-300 hover:text-orange-200"
              >
                <Mail className="h-5 w-5" /> kanigantiabhishek07@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekk-an/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href="https://github.com/abhishekk-an"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
