import React from 'react';
import Spline from '@splinetool/react-spline';
import { Linkedin, Github, Mail, Download } from 'lucide-react';

const SocialLink = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
  >
    <Icon className="h-4 w-4" />
    <span className="hidden sm:block">{label}</span>
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-orange-300/80">Portfolio</p>
        <h1 className="font-['Geist'] text-4xl font-semibold sm:text-5xl md:text-6xl">
          Abhishek Kaniganti
        </h1>
        <p className="mt-3 text-lg font-medium text-orange-200/90 sm:text-xl">
          AI Engineer | Data Engineer | Cloud & Big Data Specialist
        </p>
        <p className="mt-4 max-w-3xl text-balance text-sm text-white/80 sm:text-base">
          Building intelligent data pipelines and AI-driven systems that power smarter decisions.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <SocialLink
            href="https://www.linkedin.com/in/abhishekk-an/"
            label="LinkedIn"
            icon={Linkedin}
          />
          <SocialLink href="https://github.com/abhishekk-an" label="GitHub" icon={Github} />
          <SocialLink
            href="mailto:kanigantiabhishek07@gmail.com"
            label="Email"
            icon={Mail}
          />
          <a
            href="mailto:kanigantiabhishek07@gmail.com?subject=Resume%20Request&body=Hi%20Abhishek%2C%20please%20share%20your%20latest%20resume."
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
