import {
  Users,
  PhoneCall,
  FileText,
  Receipt,
  RefreshCw,
  ShieldCheck,
  BarChart3,
  Network,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

const CHOICE_URL = 'https://choiceinnovate.com/';

const upcoming = [
  {
    icon: Users,
    title: 'Leads, organized and routed automatically',
  },
  {
    icon: PhoneCall,
    title: 'A built-in dialer — no separate bill, no separate login',
  },
  {
    icon: FileText,
    title: 'Submissions and plan comparisons, without hopping to a carrier portal',
  },
  {
    icon: Receipt,
    title: 'Live commission tracking',
  },
  {
    icon: RefreshCw,
    title: 'Automated retention outreach',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance handled in the background',
  },
  {
    icon: BarChart3,
    title: 'Real-time reporting, one screen',
  },
  {
    icon: Network,
    title: 'Hierarchy and recruiting tools for agencies',
  },
];

export default function ChoiceInnovate() {
  return (
    <section id="choice" className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                A JSB Firm Product
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                We got tired of six tools too.{' '}
                <span className="italic text-gold-gradient">So we're building one.</span>
              </h1>
            </div>

            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <img
                src="/1.png"
                alt="CHOICE Innovate logo"
                className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* The Problem We're Solving */}
      <div className="relative py-12 lg:py-16 bg-navy-50/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              The Problem We're Solving
            </span>
            <div className="mt-4 space-y-4 text-lg lg:text-xl text-navy-600 leading-relaxed">
              <p>
                Every agent runs a handful of different tools just to do one job — a
                lead system, a dialer, a quoting tool, a commission tracker, a
                compliance system, none of them talking to each other. We lived
                inside that mess for years. So our team is building CHOICE: one
                platform, one login, everything you need to run your business.
              </p>
              <p className="text-navy-700 font-medium">
                CHOICE is developed by the same people running JSB — built by people
                who've felt this industry's problems firsthand, not outside
                observers guessing at solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Coming */}
      <div className="relative py-12 lg:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              What's Coming
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight">
              One platform. Every tool you use today.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcoming.map((item, i) => (
              <div
                key={item.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <p className="text-sm font-medium text-navy-700 leading-relaxed">
                  {item.title}
                </p>
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* A Different Kind of Investment */}
      <div className="relative py-12 lg:py-16 bg-navy-50/40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              A Different Kind of Investment
            </span>
            <p className="mt-4 text-lg lg:text-xl text-navy-600 leading-relaxed">
              CHOICE isn't a side project — it's us putting our money where our
              experience is, building the platform we always wished existed when we
              were the ones on the phones.
            </p>
            <p className="mt-4 text-lg lg:text-xl text-navy-700 font-medium leading-relaxed">
              CHOICE has its own home. Head over to see the platform for yourself.
            </p>

            <div className="mt-8">
              <a
                href={CHOICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-medium text-white hover:bg-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                Visit CHOICE
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
