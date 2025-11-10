import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-black">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
        <p className="mt-4 max-w-3xl text-white/80">
          I am a Data Engineer and AI Developer with over 4 years of experience building scalable data
          pipelines, automation frameworks, and AI-driven systems. My expertise spans BigQuery, PySpark,
          AWS, GCP, and NLP—turning complex data into reliable, production-grade insights.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-orange-300">What I Love</h3>
            <p className="mt-2 text-white/80">
              Designing robust ETL/ELT architectures, optimizing Spark jobs, and automating workflows.
              I enjoy building end-to-end solutions that are reliable, observable, and cost-efficient.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-orange-300">Education</h3>
            <ul className="mt-2 space-y-2 text-white/80">
              <li>Master’s in Artificial Intelligence — University of Michigan (2024–2025)</li>
              <li>Bachelor’s in Computer Science Engineering — JNTU (2018–2022)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
