import { ShieldCheck, Globe2, Layers } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Years Combined Experience' },
  { value: '500+', label: 'Agents Supported' },
  { value: '40+', label: 'Agency Partners' },
  { value: '2x', label: 'Avg. Revenue Growth' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              About JSB Firm
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Where industry expertise meets{' '}
              <span className="italic text-gold-gradient">innovative technology.</span>
            </h2>
            <p className="mt-6 text-navy-500 leading-relaxed text-lg">
              JSB Firm is a modern insurance solutions company built for the way
              today's agencies operate. We combine deep Medicare and ACA market
              knowledge with AI, automation, and operational excellence to help
              brokers and independent agents grow faster and serve clients better.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Today we're focused on the U.S. Health Insurance market — Medicare,
              ACA, and related products. But our business model and technology are
              designed to scale, expanding into additional insurance verticals and
              industries as we grow.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: ShieldCheck, title: 'Industry Expertise', desc: 'Deep knowledge of U.S. Health Insurance, Medicare, and ACA markets.' },
                { icon: Layers, title: 'Scalable Technology', desc: 'Solutions built to expand across insurance verticals and industries.' },
                { icon: Globe2, title: 'Bilingual Operations', desc: 'English & Spanish support for broader market reach.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{item.title}</h3>
                    <p className="text-sm text-navy-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-col items-center justify-center gap-10 lg:gap-14">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-100 to-gold/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-navy-200/60 shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src="/JSB_Firm_Logo.png"
                  alt="JSB Firm logo"
                  className="w-48 lg:w-64 h-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden lg:block w-16 h-px bg-navy-200" />
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-navy-100 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-navy-200/60 shadow-sm hover:shadow-xl transition-all duration-500">
                <img
                  src="/1.png"
                  alt="CHOICE Innovate logo"
                  className="w-48 lg:w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200/60 rounded-2xl overflow-hidden border border-navy-200/60">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-10 text-center">
                <div className="font-display text-4xl lg:text-5xl text-navy-900">{stat.value}</div>
                <div className="mt-2 text-xs font-medium text-navy-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
