import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const CHOICE_URL = 'https://choiceinnovate.com/';

const points = [
  {
    icon: ShieldCheck,
    title: 'Real infrastructure behind every agent.',
    desc: "The insurance industry is under more regulatory pressure than it's ever faced, and the agents who make it through are the ones with real infrastructure behind them.",
  },
  {
    icon: Cpu,
    title: 'Investing in CHOICE.',
    desc: "That's the standard we hold ourselves to — and it's why we're investing in CHOICE, our technology platform, alongside the agency work we've always done.",
  },
];

export default function WhyJSB() {
  return (
    <section id="where-headed" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Where We're Headed
          </span>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight">
            Setting the standard,{' '}
            <span className="italic text-gold-gradient">not chasing it.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mb-14">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-7 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                <p.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-navy-900 text-base">{p.title}</h3>
              <p className="mt-2 text-sm text-navy-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CHOICE CTA */}
        <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-14 lg:px-16 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold mb-5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  CHOICE
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight">
                  Meet the platform we're building.
                </h3>
                <p className="mt-4 text-navy-300 leading-relaxed">
                  One login. Every tool. Built by agents, for agents.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  to="/choice"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  Meet CHOICE
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={CHOICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  CHOICE's Website
                  <ExternalLink className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
