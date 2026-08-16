import { Link } from 'react-router-dom';
import {
  UserPlus,
  Network,
  ShieldCheck,
  Receipt,
  Layers,
  LayoutDashboard,
  TrendingUp,
  ArrowRight,
  Calendar,
  Check,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const benefits = [
  {
    icon: UserPlus,
    title: 'Recruiting support.',
    desc: 'Help finding and onboarding agents who are actually going to produce.',
  },
  {
    icon: Network,
    title: 'Hierarchy and downline visibility.',
    desc: "Know what's happening across your whole team, in real time, not at month-end.",
  },
  {
    icon: ShieldCheck,
    title: 'Compliance oversight at scale.',
    desc: "Every agent under you is a liability if compliance isn't handled right. We help you handle it right.",
  },
  {
    icon: Receipt,
    title: 'Commission clarity across your team.',
    desc: 'No spreadsheet chaos. Clear numbers for you and everyone underneath you.',
  },
  {
    icon: Layers,
    title: 'Lead and cost support that scales with you.',
    desc: 'The same upfront support we give individual agents, built to work across your whole agency.',
  },
  {
    icon: LayoutDashboard,
    title: 'CHOICE, built for organizations like yours.',
    desc: "Multi-agent dashboards, live oversight, and reporting, all in the platform we're building right now.",
  },
  {
    icon: TrendingUp,
    title: 'Growth support, not just maintenance support.',
    desc: "We don't just help you keep the lights on, we help you actively grow. More recruiting support as you scale, more lead volume as your team expands, more infrastructure exactly when you need it, not after you've already outgrown what you had.",
  },
];

export default function ForAgencies() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-28 pb-10 lg:pt-32 lg:pb-12">
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
              For Agencies
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
              Build your team.{' '}
              <span className="italic text-gold-gradient">We'll help you carry it.</span>
            </h1>
          </div>

          <div className="mt-8 relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 group">
            <img
              src="/agencies-hero.jpg"
              alt="Business team collaborating in a modern office meeting"
              className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* The Deal, Plainly */}
      <div className="relative py-12 lg:py-16 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                The Deal, Plainly
              </span>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                The infrastructure to carry the weight.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-lg text-navy-500 leading-relaxed">
              <p>
                Running an agency means carrying weight most people never see:
                recruiting, training, compliance oversight, making sure every agent
                under you is protected and producing. JSB gives you the
                infrastructure to carry that weight without it crushing you.
              </p>
              <p className="text-navy-700 font-medium">
                Your agency, your hierarchy, your book. We provide the backbone
                underneath it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              What You Get
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight">
              The backbone for your agency, and everyone underneath it.
            </h2>
          </div>

          <div className="divide-y divide-navy-200">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="reveal group flex items-start gap-6 lg:gap-8 py-6 first:pt-0 transition-all duration-400"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex-shrink-0 font-display text-3xl lg:text-4xl text-gold/30 group-hover:text-gold/60 transition-colors duration-300 leading-none tabular-nums">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <b.icon className="w-5 h-5 text-navy-400 group-hover:text-gold transition-colors duration-300 flex-shrink-0" />
                    <h3 className="font-display text-xl lg:text-2xl text-navy-900 tracking-tight">{b.title}</h3>
                  </div>
                  <p className="mt-2 text-base text-navy-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Feeling */}
      <div className="relative py-12 lg:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                The Feeling
              </span>
              <p className="mt-4 text-lg text-navy-500 leading-relaxed">
                Running an agency shouldn't mean you're the last line of defense
                for everything, and it shouldn't mean growth stalls out because
                you're stretched too thin. With JSB behind you, you're not building
                alone, and neither is anyone on your team, and we want you to be
                the agency other agencies measure themselves against.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 group">
              <img
                src="https://images.pexels.com/photos/8353839/pexels-photo-8353839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Business team celebrating teamwork and collaboration"
                className="w-full h-[300px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="relative px-8 py-12 lg:px-16 lg:py-14 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight">
                Let's build your agency together.
              </h2>
              <p className="mt-4 text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
                Partner your agency with JSB or talk to someone on our team about
                the infrastructure, support, and growth we bring.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/join"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  <Check className="w-4 h-4" />
                  Partner Your Agency
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
