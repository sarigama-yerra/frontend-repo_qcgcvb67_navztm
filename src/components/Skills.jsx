import React from 'react';
import { Cpu, Boxes, Cloud, Code, Wrench } from 'lucide-react';

const Group = ({ title, icon: Icon, items }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 text-white shadow-lg">
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-lg bg-white/10 p-2">
        <Icon className="h-5 w-5 text-orange-300" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/90"
        >
          {i}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Group
            title="Data Engineering"
            icon={Boxes}
            items={[
              'PySpark',
              'Apache Spark',
              'BigQuery',
              'Dataflow',
              'Airflow',
              'ETL/ELT',
            ]}
          />
          <Group
            title="Programming"
            icon={Code}
            items={["Python", "SQL", "Java", "JavaScript"]}
          />
          <Group
            title="AI / ML"
            icon={Cpu}
            items={["TensorFlow", "PyTorch", "Scikit-learn", "NLP"]}
          />
          <Group title="Cloud" icon={Cloud} items={["GCP", "AWS"]} />
          <Group
            title="DevOps"
            icon={Wrench}
            items={["Docker", "Kubernetes", "Git", "Jenkins"]}
          />
        </div>
      </div>
    </section>
  );
}
