import React from 'react';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'AriesView',
    location: 'Boston, MA',
    period: 'Aug 2025 – Present',
    points: [
      'Built AI-driven document automation systems for real estate analytics.',
      'Developed OCR and NLP pipelines using PaddleOCR, PyTorch, and Regex.',
    ],
  },
  {
    role: 'AI & NLP Developer',
    company: 'Concept Software Systems',
    location: 'Atlanta, GA',
    period: 'Jan 2024 – May 2025',
    points: [
      'Created distributed PySpark data pipelines and LLM-powered chatbot systems.',
    ],
  },
  {
    role: 'Graduate Teaching Assistant',
    company: 'University of Michigan',
    location: '',
    period: 'Oct 2024 – Jan 2025',
    points: [
      'Built cloud-based chatbot recommendation systems with BigQuery and AWS.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Green Farm Market',
    location: 'India',
    period: 'Nov 2021 – Nov 2023',
    points: [
      'Developed full-stack web applications and improved performance metrics.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">
                  {exp.role} <span className="text-white/70">| {exp.company}</span>
                </h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/70">{exp.location}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/85">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
