import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Brain,
  Clock,
  HeartHandshake,
} from 'lucide-react';

const CHOICE_URL = 'https://choiceinnovate.com/';

const aiPoints = [
  {
    icon: ShieldCheck,
    title: 'Compliance records that build themselves.',
  },
  {
    icon: Clock,
    title: 'Retention outreach that starts before a client thinks about leaving.',
  },
  {
    icon: Brain,
    title: 'Coaching built into your workflow, not scheduled three weeks out.',
  },
];

export default function WhyJSB() {
  return (
    <section id="where-headed" className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Leading With AI */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Leading With AI, Not Waiting On It
          </span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
            Less time on the extra stuff.{' '}
            <span className="italic text-gold-gradient">More time on what matters.</span>
          </h2>
          <p className="mt-4 text-lg text-navy-500 leading-relaxed">
            Other industries have already put AI to work — less busywork, more time
            on what matters. Insurance is still catching up. We're building CHOICE
            with AI at the core, not to replace agents, but to take the paperwork,
            follow-up, and repetitive tasks off your plate.
          </p>
        </div>

        <div className="max-w-4xl mb-12">
          {aiPoints.map((p, i) => (
            <div
              key={p.title}
              className="reveal group flex items-center gap-5 py-5 border-t border-navy-200 first:border-t-0 first:pt-0 transition-all duration-400"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                <p.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
              </div>
              <p className="text-lg font-medium text-navy-700 leading-relaxed">
                {p.title}
              </p>
            </div>
          ))}
        </div>

        {/* A Home for Every Stage */}
        <div className="grid sm:grid-cols-2 gap-0 max-w-4xl mb-12 border border-navy-200 rounded-2xl overflow-hidden">
          <Link
            to="/agents"
            className="reveal group relative bg-white p-8 hover:bg-navy-50/50 transition-all duration-400 block border-r border-navy-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <HeartHandshake className="w-6 h-6 text-gold" />
              <h3 className="font-display text-2xl text-navy-900 tracking-tight">
                Agents
              </h3>
            </div>
            <p className="text-base text-navy-500 leading-relaxed">
              Get contracted, get leads, get supported.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            to="/agencies"
            className="reveal group relative bg-white p-8 hover:bg-navy-50/50 transition-all duration-400 block"
          >
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-gold" />
              <h3 className="font-display text-2xl text-navy-900 tracking-tight">
                Agencies
              </h3>
            </div>
            <p className="text-base text-navy-500 leading-relaxed">
              Build and manage your team without losing your mind.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* CHOICE CTA */}
        <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          </div>

          <div className="relative px-8 py-10 lg:px-16 lg:py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold mb-4">
                  <Cpu className="w-3.5 h-3.5" />
                  Something Real Is Coming
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight">
                  One platform. One login. Everything you need.
                </h3>
                <p className="mt-3 text-navy-300 leading-relaxed">
                  Most agents juggle five or six different tools to do one job. We're
                  building CHOICE to fix that. It's ours. Soon, it'll be yours too.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Link
                  to="/choice"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  Explore CHOICE
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

        {/* Closing */}
        <div className="mt-12 max-w-3xl mx-auto text-center reveal">
          <p className="text-lg text-navy-600 leading-relaxed">
            You didn't get into this business to feel alone in it. Neither did we —
            that's why JSB exists.
          </p>
          <p className="mt-3 text-lg text-navy-700 font-medium leading-relaxed">
            You built something real. We're here to help you keep building it.
          </p>
        </div>
      </div>
    </section>
  );
}
