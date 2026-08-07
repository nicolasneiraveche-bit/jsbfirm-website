import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
  BookOpen,
  Wallet,
  LifeBuoy,
  Scale,
  Network,
  Cpu,
} from 'lucide-react';

const stats = [
  'MMO-level distribution organization',
  'Multi-line — Medicare, life, and general',
  '20+ years of leadership experience',
  'Proprietary technology (CHOICE), built in-house',
];

const reasons = [
  {
    icon: BookOpen,
    title: 'Your book is yours.',
    desc: "No fine print that quietly takes it back. What you build stays yours.",
  },
  {
    icon: Wallet,
    title: 'We front the cost, not you.',
    desc: 'Leads and startup costs add up fast. We cover that upfront so you can focus on producing.',
  },
  {
    icon: LifeBuoy,
    title: "You're never on an island.",
    desc: 'Real people, real answers — not a ticket number. If something is wrong, someone picks up.',
  },
  {
    icon: Scale,
    title: 'Compliance that protects you.',
    desc: 'CMS and state rules are not optional. We build compliance into how we operate so you are covered.',
  },
  {
    icon: TrendingUp,
    title: 'We grow with you.',
    desc: 'As your book grows, your agency grows — we scale alongside you, not off of you.',
  },
  {
    icon: Cpu,
    title: "We're building the tools you deserve.",
    desc: 'Our team is building CHOICE, a platform meant to take the busywork off your plate.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-32 pb-8 lg:pt-36 lg:pb-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-2 lg:gap-4 items-center justify-items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                The New Standard for Insurance
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                You built your book.{' '}
                <span className="italic text-gold-gradient">We've got the rest.</span>
              </h1>

              <p className="mt-5 text-lg text-navy-500 leading-relaxed max-w-2xl">
                So you can show up for the people counting on you. JSB Firm is home
                for independent agents and agencies — Medicare, life, and general
                lines. Built on technology. Backed by real people.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/join"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  Partner With Us
                </a>
                <a
                  href="/agents"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/60 px-7 py-3.5 text-sm font-medium text-navy-700 hover:border-navy-300 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  For Agents
                </a>
                <a
                  href="/agencies"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/60 px-7 py-3.5 text-sm font-medium text-navy-700 hover:border-navy-300 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  For Agencies
                </a>
              </div>
            </div>

            <div className="group flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/JSB_Firm_Logo_latest_transparent.png"
                  alt="JSB Firm logo"
                  className="h-28 sm:h-32 lg:h-36 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">
                  JSB Firm
                </span>
              </div>
              <div className="h-px w-32 bg-navy-200" />
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/1.png"
                  alt="CHOICE Innovate logo"
                  className="h-28 sm:h-32 lg:h-36 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">
                  CHOICE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Big Enough to Matter */}
      <div className="relative py-8 lg:py-12 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Big Enough to Matter,{' '}
              <span className="italic text-gold-gradient">Close Enough to Care</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-125 transition-transform duration-300" />
                </div>
                <p className="text-sm font-medium text-navy-700 leading-relaxed">
                  {stat}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg text-navy-600 font-medium">
            We support you, so you can support your clients.
          </p>
        </div>
      </div>

      {/* Why Agents Call This Home */}
      <div className="relative py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Why Agents Call This Home
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Your book of business is yours.{' '}
              <span className="italic text-gold-gradient">That doesn't change.</span>
            </h2>
            <p className="mt-4 text-lg text-navy-500 leading-relaxed">
              What we handle is everything around it. We provide the leads. We front
              the upfront cost. We give you real training, direct carrier contracts,
              and a compliance system that keeps you protected. You focus on your
              clients — we handle the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <r.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">{r.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Built to Be Different */}
      <div className="relative py-10 lg:py-14 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Built to Be Different
            </span>
            <div className="mt-4 space-y-4 text-lg text-navy-600 leading-relaxed">
              <p>
                Plenty of organizations in this industry will hand you a contract
                and little else. We built JSB because we were the agents on the other
                side of that — wishing someone had built something better. So we did.
              </p>
              <p className="text-navy-700 font-medium">
                That's still the standard we hold ourselves to.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
