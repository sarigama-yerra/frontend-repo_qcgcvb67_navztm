import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-sm font-semibold tracking-wide text-orange-300">
          ABHISHEK KANIGANTI
        </a>
        <div className="hidden gap-6 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1.5 text-sm font-semibold text-white md:inline-flex hidden"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Abhishek Kaniganti. All rights reserved.
      </footer>
    </div>
  );
}
