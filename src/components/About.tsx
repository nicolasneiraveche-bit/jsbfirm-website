import {
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

const beliefs = [
  { icon: ShieldCheck, title: 'Your book belongs to you.', desc: "Full stop. Our job isn't to hold that over you." },
  { icon: TrendingUp, title: 'Everything behind you to build it.', desc: 'Protect it, grow it, and keep it yours.' },
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
                About JSB Firm
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                We didn't study this business.{' '}
                <span className="italic text-gold-gradient">We lived it.</span>
              </h1>
            </div>

            <div className="group flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/JSB_Firm_Logo_new_transparent.png"
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

      {/* The Story */}
      <div className="relative py-8 lg:py-12 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                The Story
              </span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                Not a boardroom. The phones.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-navy-500 leading-relaxed">
              <p>
                JSB Firm started the way most good insurance organizations do —
                not in a boardroom, but on the phones.
              </p>
              <p>
                Our leadership answered calls at a major carrier before ever
                holding a license. From there: licensed agents, team managers
                running groups of 90+, agency owners building from scratch.
                Today, JSB operates as a Master Marketing Organization (MMO)
                within a major national insurance distribution network, across
                Medicare, life, and general lines.
              </p>
              <p className="text-navy-700 font-medium">
                We've been the agent staring down a stack of leads with no real
                system behind them. We've been the manager watching a compliance
                issue spiral into a chargeback. We've been up at 2am hoping
                nothing broke. That's not a pitch — that's just where we come
                from, and it's why JSB is built the way it is.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Believe */}
      <div className="relative py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              What We Believe
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight">
              Your book of business belongs to you.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl">
            {beliefs.map((b, i) => (
              <div
                key={b.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-7 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <b.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">{b.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="relative py-10 lg:py-14 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Our Mission
              </span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                Real support. Real growth.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-navy-500 leading-relaxed">
              <p>
                To give independent agents and agencies real support — leads,
                upfront capital, training, compliance, and eventually technology
                — so building a career in this industry doesn't mean building
                it alone. And it doesn't stop at support. We want every agent and
                agency with us to actually grow — bigger books, bigger teams,
                bigger futures — because our goal isn't just to be in this
                industry, it's to set the standard for it.
              </p>
              <p className="text-navy-700 font-medium">
                Underneath all of it is a simple belief: support you well enough,
                and you'll be able to show up for your clients the way you always
                wanted to. That's the real reason we do this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
