import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const carriers = [
  { name: 'Humana', website: 'https://www.humana.com', logo: '/carriers/humana.png' },
  { name: 'UnitedHealthcare', website: 'https://www.uhc.com', logo: '/carriers/unitedhealthcare.svg' },
  { name: 'Aetna', website: 'https://www.aetna.com', logo: '/carriers/aetna.svg' },
  { name: 'Devoted Health', website: 'https://www.devoted.com', logo: '/carriers/devoted.png' },
  { name: 'Golden Rule', website: 'https://www.uhone.com', logo: '/carriers/goldenrule.png' },
  { name: 'SCAN Health Plan', website: 'https://www.scanhealthplan.com', logo: '/carriers/scanhealthplan.png' },
  { name: 'Mutual of Omaha', website: 'https://www.mutualofomaha.com', logo: '/carriers/mutualofomaha.svg' },
  { name: 'Aflac', website: 'https://www.aflac.com', logo: '/carriers/aflac.svg' },
  { name: 'American Amicable', website: 'https://www.americanamicable.com', logo: '/carriers/americanamicable.png' },
  { name: 'Allstate Benefits', website: 'https://www.allstate.com', logo: '/carriers/allstate.svg' },
  { name: 'Blue Cross Blue Shield', website: 'https://www.bcbs.com', logo: '/carriers/bluecrossblueshield.svg' },
  { name: 'ConnectiCare', website: 'https://www.connecticare.com', logo: '/carriers/connecticare.svg' },
  { name: 'Imperial Health Plan', website: 'https://imperialhealthplan.com', logo: '/carriers/imperialhealthplan.svg' },
  { name: 'WellCare', website: 'https://www.wellcare.com', logo: '/carriers/wellcare.svg' },
  { name: 'Alignment Health', website: 'https://www.alignmenthealth.com', logo: '/carriers/alignmenthealth.svg' },
  { name: 'Centene', website: 'https://www.centene.com', logo: '/carriers/centene.svg' },
  { name: 'Kaiser Permanente', website: 'https://healthy.kaiserpermanente.org', logo: '/carriers/kaiserpermanente.svg' },
  { name: 'Zing Health', website: 'https://www.myzinghealth.com', logo: '/carriers/zinghealth.svg' },
  { name: 'Ameritas', website: 'https://www.ameritas.com', logo: '/carriers/ameritas.svg' },
  { name: 'Cigna', website: 'https://www.cigna.com', logo: '/carriers/cigna.svg' },
  { name: 'Clover', website: 'https://www.cloverhealth.com', logo: '/carriers/clover.svg' },
];

export default function CarrierMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const marquee = [...carriers, ...carriers];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (playing && !el.dataset.dragging) {
        el.scrollLeft += dt * 0.04;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const updateEdges = () => {
      const half = el.scrollWidth / 2;
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft >= half - el.clientWidth - 4);
    };
    el.addEventListener('scroll', updateEdges, { passive: true });
    updateEdges();

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('scroll', updateEdges);
    };
  }, [playing]);

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollLeft += dir * 240;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.dataset.dragging = '1';
    el.setPointerCapture(e.pointerId);
    el.dataset.x = String(e.clientX);
    el.dataset.start = String(el.scrollLeft);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !el.dataset.dragging) return;
    const start = Number(el.dataset.start);
    el.scrollLeft = start - (e.clientX - Number(el.dataset.x));
  };
  const onPointerUp = () => {
    const el = scrollerRef.current;
    if (!el) return;
    delete el.dataset.dragging;
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="marquee-mask no-scrollbar overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex w-max gap-5 px-6 py-4">
          {marquee.map((carrier, i) => (
            <a
              key={`${carrier.name}-${i}`}
              href={carrier.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 flex-shrink-0"
            >
              <div className="w-44 h-32 rounded-2xl border border-navy-200/60 bg-white flex flex-col items-center justify-center px-5 gap-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-navy-900/5 group-hover:border-gold/40">
                <div className="w-32 h-14 flex items-center justify-center">
                  <img
                    src={carrier.logo}
                    alt={`${carrier.name} logo`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-display text-sm text-navy-800 group-hover:text-gold transition-colors duration-300 text-center">
                  {carrier.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Scroll left"
          className="w-10 h-10 rounded-full border border-navy-200 bg-white flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-gold hover:border-navy-900 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-navy-700 disabled:hover:border-navy-200 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause' : 'Play'}
          className="w-10 h-10 rounded-full border border-navy-200 bg-white flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-gold hover:border-navy-900 transition-all duration-300"
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Scroll right"
          className="w-10 h-10 rounded-full border border-navy-200 bg-white flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-gold hover:border-navy-900 disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-navy-700 disabled:hover:border-navy-200 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
