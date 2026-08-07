import { Link } from 'react-router-dom';
import {
  Target,
  Wallet,
  Zap,
  GraduationCap,
  ShieldCheck,
  Receipt,
  LayoutDashboard,
  TrendingUp,
  ArrowRight,
  Calendar,
  Check,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const benefits = [
  {
    icon: Target,
    title: 'Leads, provided.',
    desc: 'We put opportunity in front of you instead of asking you to go find it and pay for it yourself.',
  },
  {
    icon: Wallet,
    title: 'Upfront costs, covered.',
    desc: "Getting started in this business is expensive. We front that cost so you're not funding your own launch out of pocket.",
  },
  {
    icon: Zap,
    title: 'Fast, direct contracting.',
    desc: 'Carrier appointments without the runaround, so you can start writing business sooner.',
  },
  {
    icon: GraduationCap,
    title: 'Real training, from real agents.',
    desc: 'Taught by people who carried a quota, not people who read about one.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance that has your back.',
    desc: "CMS and state requirements handled at the organizational level, so you're supported, not left exposed and figuring it out alone.",
  },
  {
    icon: Receipt,
    title: 'Reliable commissions.',
    desc: 'Clear tracking, honest timelines, no surprises.',
  },
  {
    icon: LayoutDashboard,
    title: 'A platform built for you, coming soon.',
    desc: "CHOICE will bring your leads, dialer, submissions, and commissions into one login. We're building it because we got tired of the same five tools you are.",
  },
  {
    icon: TrendingUp,
    title: 'Room to grow, not just a contract.',
    desc: "We don't want you to plateau. As you produce, we invest more into you: more leads, more support, more opportunity to build out a team of your own if that's where you want to go.",
  },
];

export default function ForAgents() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              For Agents
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
              Your book. Your clients.{' '}
              <span className="italic text-gold-gradient">Our support behind you.</span>
            </h1>
          </div>

          <div className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 group">
            <img
              src="/agents-hero.jpg"
              alt="Call center agent with headset working at a computer"
              className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* The Deal, Plainly */}
      <div className="relative py-14 lg:py-20 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                The Deal, Plainly
              </span>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                We handle what makes the work possible.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-lg text-navy-500 leading-relaxed">
              <p>
                You do the work that matters: the calls, the relationships, the
                follow-through. We handle what makes that possible: leads in your
                pipeline, the upfront cost of getting started, contracts with the
                carriers you need, and a compliance system that keeps your license
                safe.
              </p>
              <p className="text-navy-700 font-medium">
                Your book of business is yours. We're not here to take a piece of
                what you build, we're here to make sure you can build it in the
                first place.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              What You Get
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight">
              Everything behind you, so you can focus on what's in front of you.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <b.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">{b.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{b.desc}</p>
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Feeling */}
      <div className="relative py-14 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              The Feeling
            </span>
            <p className="mt-4 font-display text-3xl lg:text-4xl text-navy-900 italic leading-snug text-balance">
              No more guessing if you're covered. No more wondering if the lead
              cost is worth it. No more figuring it out solo. This is the place you
              come to work, grow, and know you're backed the whole way.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="relative px-8 py-14 lg:px-16 lg:py-18 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
                Get contracted or talk to someone on our team. We'll walk you
                through leads, support, compliance, and what growth looks like
                from here.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/join"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  <Check className="w-4 h-4" />
                  Get Contracted
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4 text-gold" />
                  Talk to Someone
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
