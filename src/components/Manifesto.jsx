import { Shield, Target, Trophy } from 'lucide-react';

export default function Manifesto() {
  const items = [
    {
      icon: <Shield className="h-6 w-6 text-emerald-400" />,
      title: 'Discipline',
      text: 'Meticulous process, rigorous quality standards, and execution without compromise.'
    },
    {
      icon: <Target className="h-6 w-6 text-emerald-400" />,
      title: 'Precision',
      text: 'Solutions engineered with surgical accuracy, aligned to measurable objectives.'
    },
    {
      icon: <Trophy className="h-6 w-6 text-emerald-400" />,
      title: 'Domination',
      text: 'Market leadership in every niche we enter and for every partner we serve.'
    }
  ];

  return (
    <section id="manifesto" className="relative scroll-mt-24 bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">The Top G Doctrine</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-300">
          Our operational creed: Total Digital Execution. Strategy, engineering, and artistry fused into
          a single, outcome-obsessed workflow.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400/10">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
