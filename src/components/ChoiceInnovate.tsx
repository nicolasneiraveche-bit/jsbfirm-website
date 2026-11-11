import { Sparkles, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                Coming soon,{' '}
                <span className="italic text-gold-gradient">one platform with every tool you use today.</span>
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
                Running an insurance business today means stitching together a
                stack of disconnected tools just to get through the day. We
                lived inside that mess for years, and we decided there had to be
                a better way. So we're building one platform that brings it all
                together — one login, everything you need to run your business.
              </p>
              <p className="text-navy-700 font-medium">
                It's being built by the same people running JSB — by people who
                have felt this industry's problems firsthand, not outside
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
            <p className="mt-4 text-lg text-navy-500 leading-relaxed max-w-2xl">
              We're not ready to share the details just yet, but if you've ever
              wished the tools you rely on every day actually talked to each
              other, this is for you.
            </p>
          </div>

          <div className="relative rounded-3xl bg-white border border-navy-200/60 p-10 lg:p-14 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold-50/60 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-1.5 text-xs font-medium text-navy-600 mb-4">
                  <Cpu className="w-3.5 h-3.5 text-gold" />
                  In Development
                </div>
                <h3 className="font-display text-3xl lg:text-4xl text-navy-900 tracking-tight">
                  The details are coming.
                </h3>
                <p className="mt-3 text-navy-600 leading-relaxed">
                  We're putting the pieces in place now. When there's something
                  real to show, this is where you'll find it.
                </p>
              </div>

              <Link
                to="/join"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-medium text-white hover:bg-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Stay in the Loop
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
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
              This isn't a side project — it's us putting our money where our
              experience is, building the platform we always wished existed when
              we were the ones on the phones.
            </p>
            <p className="mt-4 text-lg lg:text-xl text-navy-700 font-medium leading-relaxed">
              We'll share more when the time is right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
