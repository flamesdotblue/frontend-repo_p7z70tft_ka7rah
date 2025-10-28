import { User, Code, PenTool, Camera } from 'lucide-react';

export default function Founders() {
  return (
    <section id="founders" className="bg-[#0A0A0A] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">The Founders</h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              The synergistic nexus of engineering precision and architectural artistry.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-gray-300 sm:block">
            Ethiopia • East Africa • Global
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Dagi */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-400/10">
                <Code className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dagmawi “Dagi” Amare</h3>
                <p className="text-sm text-gray-400">The Engineer</p>
              </div>
            </div>
            <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-gray-300">
              <li>Advanced Web & Software Development</li>
              <li>Mobile Apps with Flutter</li>
              <li>UI/UX Engineering & Performance Optimization</li>
              <li>Technical SEO & Scalable Architecture</li>
            </ul>
          </div>

          {/* Tsion */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 transition">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-400/10">
                <PenTool className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tsion Berihun</h3>
                <p className="text-sm text-gray-400">The Architect</p>
              </div>
            </div>
            <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-gray-300">
              <li>Photorealistic 3D Architectural Visualization</li>
              <li>Advanced Video Editing & Motion Graphics</li>
              <li>Professional Photography & Videography</li>
              <li>Experiential Design & Installations</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300">
          Together, they deliver end-to-end solutions — Dagi engineers the logic and systems; Tsion crafts
          immersive narratives and visuals. The result: premium-value outcomes delivered with speed and certainty.
        </div>
      </div>
    </section>
  );
}
