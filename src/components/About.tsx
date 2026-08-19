import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Users, Eye, HeartHandshake, Check } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const principles = [
  {
    icon: Users,
    title: 'People Before Policies',
    desc: 'Every relationship starts with understanding the person, not simply looking at a product.',
  },
  {
    icon: Eye,
    title: 'Clarity Before Complexity',
    desc: 'Insurance is complicated enough. Communication should be straightforward.',
  },
  {
    icon: HeartHandshake,
    title: 'Relationships Over Transactions',
    desc: 'The goal is relationships that last longer than a single policy.',
  },
  {
    icon: Check,
    title: 'Do What You Say',
    desc: 'Trust is built through consistency, transparency, and following through.',
  },
];

const beliefs = [
  'People before policies.',
  'Clarity before complexity.',
  'Relationships before transactions.',
  'Long-term trust over short-term wins.',
];

export function AboutTop() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 lg:pt-36 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-10 items-center justify-items-center">
            <div className="max-w-3xl">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                Built on Relationships.{' '}
                <span className="italic text-gold-gradient">Driven by Purpose.</span>
              </h1>

              <p className="mt-6 text-lg text-navy-500 leading-relaxed max-w-2xl">
                JSB Firm was created around a simple belief — insurance should
                be about people first. Not transactions. Not fine print. Not
                policies pushed on someone who never had the chance to
                understand them.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                  Let's Talk
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/60 px-7 py-3.5 text-sm font-medium text-navy-700 hover:border-navy-300 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  What We Do
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="group flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/Logo-transparent.png"
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
      </section>

      {/* Why We Exist */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Why We Exist
          </span>
          <div className="mt-5 space-y-5 text-lg text-navy-600 leading-relaxed">
            <p>
              Insurance can feel transactional, complicated, and impersonal. You
              fill out forms, answer questions, get handed a policy, and then
              you're on your own. The person who helped you is gone. The
              relationship ended the moment the paperwork was signed.
            </p>
            <p>
              JSB Firm believes it should be different. We exist to create
              genuine relationships, communicate honestly, and help people
              navigate important decisions with confidence. Not because it's
              good for business, but because it's how insurance should have
              worked all along.
            </p>
            <p className="text-navy-800 font-display text-xl italic leading-relaxed">
              This is a philosophy, not a sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              How We Think
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              The principles behind every conversation.
            </h2>
          </div>

          <div className="space-y-0">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`reveal flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-12 py-8 border-t border-navy-200 first:border-t-0 first:pt-0`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="font-display text-5xl lg:text-6xl text-gold/20 leading-none tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <p.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <h3 className="font-display text-2xl lg:text-3xl text-navy-900 tracking-tight">{p.title}</h3>
                  </div>
                  <p className="text-lg text-navy-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutBottom() {
  return (
    <>
      {/* What We Believe */}
      <section className="relative py-12 lg:py-16 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              What We Believe
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
              The philosophy behind everything.
            </h2>
          </div>

          <div className="space-y-0">
            {beliefs.map((b, i) => (
              <div
                key={b}
                className="reveal flex items-center gap-6 py-5 border-t border-white/10 first:border-t-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-2xl text-gold/40 tabular-nums leading-none flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-2xl lg:text-3xl text-white italic leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-navy-100/40 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <p className="font-display text-3xl lg:text-4xl text-navy-900 italic leading-snug text-balance">
            Choosing who to trust with something as important as insurance is a
            personal decision. We don't take that lightly.
          </p>
          <p className="mt-6 text-lg text-navy-500 leading-relaxed max-w-2xl mx-auto">
            We'd love to get to know you.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
              Let's Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
