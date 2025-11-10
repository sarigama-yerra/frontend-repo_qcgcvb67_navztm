import React from 'react';

export default function Education() {
  return (
    <section id="education" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Education</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Master’s in Artificial Intelligence</h3>
            <p className="text-white/70">University of Michigan (2024–2025)</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Bachelor’s in Computer Science Engineering</h3>
            <p className="text-white/70">JNTU (2018–2022)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
