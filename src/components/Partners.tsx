import { Link } from 'react-router-dom';
import { Handshake, Building2, Network, Star } from 'lucide-react';

const partners = [
  { icon: Building2, name: 'Insurance Carriers', desc: 'Direct relationships with leading Medicare and ACA carriers.' },
  { icon: Network, name: 'Agency Networks', desc: 'Collaboration with top-performing agency networks nationwide.' },
  { icon: Star, name: 'Technology Providers', desc: 'Integration with premier CRM and insurance technology platforms.' },
  { icon: Handshake, name: 'Industry Associations', desc: 'Active membership in U.S. health insurance industry associations.' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Partners
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Stronger together.{' '}
              <span className="italic text-gold-gradient">Built on trust.</span>
            </h2>
            <p className="mt-5 text-navy-500 leading-relaxed text-lg">
              We partner with carriers, technology providers, and agency networks
              to give our clients access to the best products, tools, and
              opportunities in the U.S. Health Insurance market.
            </p>

            <div className="mt-10 rounded-2xl border border-navy-200/60 bg-navy-50/50 p-7">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">
                    Become a JSB Partner
                  </h3>
                  <p className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                    Whether you're a carrier, technology provider, or independent
                    agent, we'd love to explore how we can grow together.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-gold transition-colors"
                  >
                    Start the conversation
                    <span className="transition-transform hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                className="reveal group rounded-2xl border border-navy-200/60 bg-white p-6 hover:shadow-lg hover:shadow-navy-900/5 hover:border-navy-300 transition-all duration-400 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <partner.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900">{partner.name}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
