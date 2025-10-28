import { Layers, Code, Video, Settings } from 'lucide-react';

export default function Services() {
  const groups = [
    {
      icon: <Layers className="h-6 w-6 text-emerald-400" />,
      title: 'Strategy & Brand',
      items: [
        'Brand Building (Logo)',
        'Strategic Copywriting',
        'UI/UX Design',
        'Digital Product Strategy',
        'White-Label Partnerships'
      ]
    },
    {
      icon: <Code className="h-6 w-6 text-emerald-400" />,
      title: 'Development & Engineering',
      items: [
        'Websites & Software',
        'Advanced E-commerce',
        'Mobile Apps (Flutter)',
        'SEO & Technical Audits',
        'Immersive Web (WebGL/Three.js)'
      ]
    },
    {
      icon: <Video className="h-6 w-6 text-emerald-400" />,
      title: 'Creative & Content',
      items: [
        'Graphics & Animation',
        'Video Editing',
        'Photography & Videography',
        'Architectural Visualization',
        'E-learning Content & Platforms'
      ]
    },
    {
      icon: <Settings className="h-6 w-6 text-emerald-400" />,
      title: 'Management & Experiential',
      items: [
        'Social Media Management',
        'Google My Business',
        'Email Marketing & Automation',
        'Digital Asset Management (DAM)',
        'Interactive Installations & LED Arts'
      ]
    }
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Comprehensive Service Spectrum</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-300">
          End-to-end capabilities engineered for measurable outcomes and market dominance.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-400/10">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-2 grid gap-2 text-sm text-gray-300">
                {group.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
