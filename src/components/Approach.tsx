import { Search, SlidersHorizontal, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    desc: 'We start by deeply understanding your agency — your goals, your team, your technology, and your market. Every recommendation is grounded in your specific reality, not a template.',
    points: ['Discovery & audit', 'Market analysis', 'Goal alignment'],
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Optimize',
    desc: 'We refine your processes, technology stack, and lead pipelines. From CRM architecture to AI automation, we remove friction and build the infrastructure that makes growth possible.',
    points: ['Process redesign', 'Technology integration', 'AI automation'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Scale',
    desc: 'With the foundation in place, we help you scale — expanding into new markets, recruiting and training teams, and leveraging strategic partnerships for compounding growth.',
    points: ['Market expansion', 'Team building', 'Partnership growth'],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-28 lg:py-36 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Our Approach
          </span>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl text-white tracking-tight leading-tight text-balance">
            A clear path from{' '}
            <span className="italic text-gold-gradient">insight to scale.</span>
          </h2>
          <p className="mt-5 text-navy-300 leading-relaxed text-lg">
            Three deliberate steps that turn complexity into clarity, and clarity
            into compounding growth.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-navy-600 to-transparent" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative rounded-2xl glass-dark border border-white/10 p-8 h-full hover:border-gold/40 transition-all duration-400 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="font-display text-5xl text-white/10 group-hover:text-gold/30 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-navy-300 leading-relaxed">
                  {step.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-navy-200">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
