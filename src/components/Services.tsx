import {
  HeartPulse,
  Activity,
  TrendingUp,
  Target,
  Bot,
  Cpu,
  Headset,
  Users,
  Handshake,
} from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Medicare Solutions',
    desc: 'Comprehensive Medicare enrollment, retention, and growth strategies tailored for agencies serving seniors.',
  },
  {
    icon: Activity,
    title: 'ACA Solutions',
    desc: 'Navigate the Affordable Care Act marketplace with optimized enrollment flows and compliance support.',
  },
  {
    icon: TrendingUp,
    title: 'Agency Growth',
    desc: 'Structured growth frameworks that help agencies scale revenue, headcount, and market presence sustainably.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    desc: 'High-intent, compliant lead pipelines powered by data targeting and multi-channel acquisition.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Intelligent automation for quoting, enrollment, follow-ups, and client communication workflows.',
  },
  {
    icon: Cpu,
    title: 'Technology Consulting',
    desc: 'CRM architecture, system integration, and technology stack optimization for modern insurance operations.',
  },
  {
    icon: Headset,
    title: 'Sales Operations',
    desc: 'Sales process design, performance tracking, and operational infrastructure that drives consistency.',
  },
  {
    icon: Users,
    title: 'Recruitment & Training',
    desc: 'Agent recruiting, onboarding, and certification programs that build high-performing bilingual teams.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    desc: 'Carrier relationships and industry alliances that unlock new markets and revenue opportunities.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-navy-50/40">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            What We Do
          </span>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
            Solutions built for{' '}
            <span className="italic text-gold-gradient">modern insurance</span> operations.
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed text-lg">
            From Medicare and ACA enrollment to AI automation and agency growth,
            we deliver the technology and operational support insurance
            professionals need to scale.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-7 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                <service.icon className="w-5.5 h-5.5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-navy-900 text-lg">{service.title}</h3>
              <p className="mt-2.5 text-sm text-navy-500 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-navy-400 group-hover:text-gold transition-colors duration-300">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
