import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Founders from './components/Founders';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Hero />
      <Manifesto />
      <Founders />
      <Services />
      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 text-sm text-gray-400">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} G‑Squad • All rights reserved</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:info@g.squad" className="hover:text-white">info@g.squad</a>
              <span className="text-gray-600">|</span>
              <a href="https://x.com/theg_squad" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
              <a href="https://instagram.com/the._g_.squad" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://t.me/the_gsquad" target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
