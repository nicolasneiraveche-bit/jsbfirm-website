import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Building2, Network, Star, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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
];

const partners = [
  { icon: Building2, name: 'Insurance Carriers', desc: 'Direct relationships with leading Medicare and ACA carriers.' },
  { icon: Network, name: 'Agency Networks', desc: 'Collaboration with top-performing agency networks nationwide.' },
  { icon: Star, name: 'Technology Providers', desc: 'Integration with premier CRM and insurance technology platforms.' },
  { icon: Handshake, name: 'Industry Associations', desc: 'Active membership in U.S. health insurance industry associations.' },
];

export default function Partners() {
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
        el.scrollLeft += dt * 0.04; // ~40px/s
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
    <section id="partners" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Carrier bar at top */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Trusted Carriers
          </span>
          <h2 className="mt-3 font-display text-3xl lg:text-4xl text-navy-900 tracking-tight leading-tight text-balance">
            We work with the biggest names in the industry.
          </h2>
          <p className="mt-4 text-navy-500 leading-relaxed text-lg max-w-2xl mx-auto">
            Our agents and agencies hold direct appointments with the nation's
            leading health insurance carriers, so the products you offer are
            backed by names your clients already trust.
          </p>
        </div>

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
                    <img
                      src={carrier.logo}
                      alt={`${carrier.name} logo`}
                      loading="lazy"
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="font-display text-sm text-navy-800 group-hover:text-gold transition-colors duration-300 text-center">
                      {carrier.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Controls */}
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

        {/* Existing partner content below */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Partners
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Stronger together.{' '}
              <span className="italic text-gold-gradient">Built on trust.</span>
            </h2>
            <p className="mt-5 text-navy-500 leading-relaxed text-lg">
              We partner with carriers, technology providers, and agency networks
              to give our clients access to the best products, tools, and
              opportunities in the U.S. Health Insurance market.
            </p>

            <div className="mt-10 rounded-2xl border border-navy-200/60 bg-navy-50/50 p-7">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">
                    Become a JSB Partner
                  </h3>
                  <p className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                    Whether you're a carrier, technology provider, or independent
                    agent, we'd love to explore how we can grow together.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-gold transition-colors"
                  >
                    Start the conversation
                    <span className="transition-transform hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="reveal group rounded-2xl border border-navy-200/60 bg-white p-6 hover:shadow-lg hover:shadow-navy-900/5 hover:border-navy-300 transition-all duration-400 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <partner.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900">{partner.name}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
