import {
  Users,
  PhoneCall,
  FileText,
  Receipt,
  RefreshCw,
  ShieldCheck,
  BarChart3,
  Network,
  Sparkles,
  ArrowRight,
  Video,
  ExternalLink,
  Check,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';
const CHOICE_URL = 'https://choiceinnovate.com/';

const badges = [
  'Compliant Lead Marketplace',
  'Enterprise Dialer',
  'Live Commission Tracking',
  'Automated Retention',
];

const features = [
  {
    icon: Users,
    title: 'Compliant Lead Marketplace',
    desc: 'High-intent leads, scored and routed to the right agent.',
  },
  {
    icon: PhoneCall,
    title: 'Enterprise Dialer',
    desc: 'Power dialing, local presence, and call transcription, built in.',
  },
  {
    icon: FileText,
    title: 'Submissions',
    desc: 'Plan comparisons and carrier submissions without leaving the platform.',
  },
  {
    icon: Receipt,
    title: 'Live Commission Tracking',
    desc: 'Real-time payouts, reconciled automatically against carrier statements.',
  },
  {
    icon: RefreshCw,
    title: 'Automated Retention',
    desc: 'AI flags at-risk policies and drafts outreach before a client walks.',
  },
  {
    icon: ShieldCheck,
    title: 'Built-In Compliance',
    desc: 'A2P 10DLC, TCPA, and state-by-state rules handled in the background.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    desc: 'Every agent, every agency, one screen.',
  },
  {
    icon: Network,
    title: 'Hierarchy & Recruiting Tools',
    desc: 'Manage downlines and growth without spreadsheets.',
  },
];

export default function ChoiceInnovate() {
  return (
    <section id="choice" className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                A JSB Firm Product
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
                What is CHOICE?{' '}
                <span className="italic text-gold-gradient">One login. Every tool.</span>
              </h1>

              <p className="mt-5 text-lg text-navy-500 leading-relaxed max-w-2xl">
                CHOICE is the all-in-one platform built for insurance agents who are
                done juggling five tools to do one job. Instead of paying for a
                separate lead vendor, a third-party dialer, a carrier portal,
                commission spreadsheets, and a retention strategy, CHOICE brings it
                all into one login.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-4 py-2 text-sm font-medium text-navy-700"
                  >
                    <Check className="w-4 h-4 text-gold" />
                    {badge}
                  </span>
                ))}
              </div>
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

      {/* What CHOICE Provides */}
      <div className="relative py-14 lg:py-20 bg-navy-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl lg:text-5xl text-navy-900 tracking-tight">
              What CHOICE Provides
            </h2>
            <p className="mt-3 text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed">
              Everything agents, agency owners, and organizations need to run
              the full insurance workflow — without stitching together six
              different tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">{feature.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-display text-2xl lg:text-3xl text-navy-900 italic max-w-3xl mx-auto leading-snug">
              "One platform. Every level — independent agents, agency owners, and
              organizations."
            </p>
          </div>
        </div>
      </div>

      {/* Powered by AI */}
      <div className="relative py-14 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Powered by AI
              </span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight">
                AI that works quietly in the background.
              </h2>
            </div>

            <div className="space-y-5 text-lg text-navy-500 leading-relaxed">
              <p>
                CHOICE surfaces the right lead, automates the repetitive follow-ups,
                and stays out of your way so you can focus on what actually grows
                your business: your clients.
              </p>
              <p className="text-navy-700 font-medium">
                Built by agents, for agents. We've lived the frustration of
                losing clients between platforms and watching great producers
                burn out without the right tools. CHOICE is what we built because
                nothing else out there was worthy of the effort agents put in
                every day.
              </p>
            </div>
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

            <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
              <h2 className="font-display text-4xl lg:text-5xl text-white tracking-tight">
                Ready to Learn More?
              </h2>
              <p className="mt-5 text-lg text-navy-300 leading-relaxed max-w-2xl mx-auto">
                Book a private call with our team to walk through CHOICE — leads,
                dialer, submissions, commissions, and growth.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
                >
                  <Video className="w-4 h-4" />
                  Schedule a Zoom Meeting
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={CHOICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4 text-gold" />
                  Visit CHOICE Innovate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
