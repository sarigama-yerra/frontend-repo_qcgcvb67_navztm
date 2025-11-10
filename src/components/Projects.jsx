import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Real Estate Document Analysis',
    tech: 'OCR + Deep Learning',
    desc:
      'Automated extraction and validation of real-estate documents using OCR and deep learning models to reduce manual processing time.',
  },
  {
    title: 'Cloud Chatbot for Restaurant Recommendations',
    tech: 'BigQuery + AWS',
    desc:
      'Built a scalable chatbot using cloud data warehouses and serverless functions delivering personalized recommendations.',
  },
  {
    title: 'Smart Door Authentication System',
    tech: 'AWS Rekognition + IoT',
    desc:
      'Deployed an intelligent edge system for secure access control using face recognition and IoT devices.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-white/60" />
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-orange-300/80">{p.tech}</p>
              <p className="mt-3 text-white/80">{p.desc}</p>
              <div className="mt-4 h-28 w-full rounded-xl bg-gradient-to-tr from-orange-500/30 to-red-500/20 ring-1 ring-inset ring-white/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
