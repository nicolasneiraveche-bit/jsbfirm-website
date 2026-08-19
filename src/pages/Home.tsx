import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Handshake,
  Compass,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Cpu,
  Users,
  Building2,
  Sparkles,
  Network,
} from 'lucide-react';
import CarrierMarquee from '@/components/CarrierMarquee';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const benefits = [
  {
    icon: Compass,
    title: 'Personal Guidance',
    desc: 'You work with a real person who knows your situation, not a call center reading from a script.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    desc: 'Insurance is complicated enough. We explain things in plain language so you understand what you are choosing.',
  },
  {
    icon: HeartHandshake,
    title: 'Support',
    desc: 'When something changes or something goes wrong, the person who helped you is still the person you call.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust',
    desc: 'No pressure, no jargon, no surprises. Just straightforward guidance from people who genuinely care.',
  },
];

const audiences = [
  {
    icon: Users,
    label: 'For Agents',
    to: '/agents',
    title: 'Agents',
    desc: 'Leads, fast contracting, compliance handled, and a platform built to help you write more business without carrying the overhead alone.',
  },
  {
    icon: Building2,
    label: 'For Agencies',
    to: '/agencies',
    title: 'Agencies',
    desc: 'Recruiting support, downline visibility, commission clarity, and the infrastructure to grow your team without the weight falling on you.',
  },
  {
    icon: Handshake,
    label: 'For Partners',
    to: '/partners',
    title: 'Partners',
    desc: 'Carrier-grade relationships and technology that connects, so together we can reach more people with better insurance.',
  },
];

const techPillars = [
  {
    icon: Cpu,
    title: 'Technology that works for you',
    desc: 'Our platform, CHOICE, brings leads, dialer, submissions, and commissions into one login, so you spend less time juggling tools and more time with people.',
  },
  {
    icon: Network,
    title: 'Support that scales',
    desc: 'From your first appointment to a downline of dozens, the backing you get from JSB grows with you, not behind you.',
  },
  {
    icon: Sparkles,
    title: 'Built for what comes next',
    desc: 'We look toward the future of insurance, automation, AI, and innovation, and we bring that to the people building it alongside us.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28 pb-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-float" />
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-navy-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                </span>
                Insurance &middot; Technology &middot; Innovate
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                Insurance, built for the{' '}
                <span className="italic text-gold-gradient">people behind it.</span>
              </h1>

              <p className="mt-7 text-lg text-navy-500 leading-relaxed max-w-xl">
                JSB Firm is built with real technology and real support for
                agencies, agents, and partners who want a clearer path to growth.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/25 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  Schedule a Zoom Meeting
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/partners"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white/50 px-7 py-3.5 text-sm font-medium text-navy-800 hover:border-navy-300 hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Handshake className="w-4 h-4 text-gold" />
                  Become a Partner
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-100/40 to-navy-100/40 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-navy-200/60 shadow-2xl shadow-navy-900/10">
                  <img
                    src="https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Business professionals in a strategic meeting at a modern office"
                    className="w-full h-[420px] lg:h-[460px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-6 -left-6 glass rounded-2xl border border-white/60 p-5 shadow-xl shadow-navy-900/10 w-56">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center">
                      <span className="text-gold font-display text-lg">AI</span>
                    </div>
                    <div>
                      <div className="text-xs text-navy-400 font-medium">Powered by</div>
                      <div className="text-sm font-semibold text-navy-900">Automation</div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1 h-8">
                    {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 gold-gradient rounded-sm"
                        style={{ height: `${h}%`, animation: `fadeUp 0.6s ease-out ${i * 0.1}s both` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 glass rounded-2xl border border-white/60 px-5 py-3 shadow-xl">
                  <div className="text-2xl font-display text-navy-900">+180%</div>
                  <div className="text-[11px] text-navy-400 font-medium uppercase tracking-wider">
                    Avg. Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Who We Are
              </span>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                An insurance company with technology at the center.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-lg text-navy-500 leading-relaxed">
              <p>
                We help agencies, agents, and partners grow through technology,
                AI, automation, and operational excellence, with a focus on
                Medicare, life, and general lines.
              </p>
              <p>
                This is not a place for members. This is a place for the people
                who serve them. We give you the tools, the support, and the
                infrastructure to do that better, and to build something that
                lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology pillars */}
      <section className="relative py-12 lg:py-16 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Technology &amp; Support
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Better tools, real backing, built for what comes next.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techPillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-7 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-navy-900 tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{p.desc}</p>
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who JSB is for */}
      <section className="relative py-12 lg:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-navy-100/40 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Who JSB Is For
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Built for agencies, agents, and partners.
            </h2>
            <p className="mt-4 text-lg text-navy-500 leading-relaxed">
              Here is how we support you:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Link
                key={a.title}
                to={a.to}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-7 hover:border-gold/40 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1 flex flex-col"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <a.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-navy-900 tracking-tight mb-2">{a.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed flex-1">{a.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy-700 group-hover:text-gold transition-colors duration-300">
                  Explore {a.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why JSB Firm */}
      <section className="relative py-12 lg:py-16 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Why JSB Firm
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              The difference is the people.
            </h2>
          </div>

          <div className="divide-y divide-navy-200">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="reveal group flex items-start gap-6 lg:gap-8 py-6 first:pt-0 last:pb-0 transition-all duration-400"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex-shrink-0 font-display text-4xl lg:text-5xl text-gold/30 group-hover:text-gold/60 transition-colors duration-300 leading-none tabular-nums">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <b.icon className="w-5 h-5 text-navy-400 group-hover:text-gold transition-colors duration-300 flex-shrink-0" />
                    <h3 className="font-display text-2xl text-navy-900 tracking-tight">{b.title}</h3>
                  </div>
                  <p className="mt-2 text-base text-navy-500 leading-relaxed max-w-xl">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier marquee */}
      <section className="relative pt-4 pb-12 lg:pb-16 bg-navy-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Trusted Carriers
            </span>
            <h2 className="mt-3 font-display text-2xl lg:text-3xl text-navy-900 tracking-tight leading-tight text-balance">
              Proud to partner with some of the industry's top carriers
            </h2>
          </div>
          <CarrierMarquee />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="relative px-8 py-12 lg:px-16 lg:py-14 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight text-balance">
                Let's make insurance{' '}
                <span className="italic text-gold-gradient inline-block pr-1 pb-1">a little easier.</span>
              </h2>
              <p className="mt-4 text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
                Have a question, or just want to talk through your situation?
                We're happy to listen, with no pressure and no obligation.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let's Talk
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
