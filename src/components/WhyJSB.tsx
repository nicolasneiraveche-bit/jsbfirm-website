import {
  Award,
  Cpu,
  Sparkles,
  Languages,
  Settings2,
  Maximize2,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Industry Expertise', desc: 'Deep-rooted knowledge of U.S. Health Insurance, Medicare, and ACA markets.' },
  { icon: Cpu, title: 'Technology Driven', desc: 'Modern CRM, automation, and systems built for how agencies actually work.' },
  { icon: Sparkles, title: 'AI Powered', desc: 'Intelligent workflows that reduce manual effort and accelerate growth.' },
  { icon: Languages, title: 'Bilingual Team', desc: 'Full English & Spanish support to serve a broader, diverse client base.' },
  { icon: Settings2, title: 'Operational Excellence', desc: 'Process-driven operations that create consistency and reliability at scale.' },
  { icon: Maximize2, title: 'Scalable Solutions', desc: 'Architecture designed to expand across verticals and new industries.' },
  { icon: ShieldCheck, title: 'Trusted Partnerships', desc: 'Carrier relationships and alliances that open doors to new opportunities.' },
  { icon: HeartHandshake, title: 'Customer First', desc: 'Every decision starts with what serves the client and their members best.' },
];

export default function WhyJSB() {
  return (
    <section id="why" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Why JSB Firm
          </span>
          <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
            Built different.{' '}
            <span className="italic text-gold-gradient">Built to last.</span>
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed text-lg">
            We blend the precision of a technology company with the nuance of
            insurance expertise — so our partners get both innovation and
            reliability.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal group relative rounded-2xl border border-navy-200/60 bg-white p-6 hover:bg-navy-900 transition-all duration-400 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                <reason.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-navy-900 group-hover:text-white transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-navy-500 group-hover:text-navy-200 leading-relaxed transition-colors duration-300">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
