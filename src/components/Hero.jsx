import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A]">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/20 to-[#0A0A0A]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white sm:pt-36">
        {/* Logo / Mark */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs tracking-widest text-gray-200">G-SQUAD GENESIS PROTOCOL</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Architecting Digital Dominance
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
          Total Digital Execution for enterprises that demand precision, speed, and impact. We engineer
          digital empires — from brand to code to immersive experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#manifesto"
            className="inline-flex items-center rounded-md bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Explore the Manifesto
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            View Capabilities
          </a>
        </div>

        <div className="mt-10 text-xs uppercase tracking-widest text-gray-400">
          Document Version 1.0 • October 13, 2025 • Strictly Confidential
        </div>
      </div>
    </section>
  );
}
