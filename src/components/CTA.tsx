import { Video, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal relative rounded-3xl overflow-hidden bg-navy-900 px-8 py-16 lg:px-16 lg:py-24">
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-gold/10 to-transparent" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-shimmer" />
            <div className="absolute bottom-0 left-0 w-96 h-64 bg-navy-700/40 rounded-full blur-3xl" />
            <div className="absolute inset-0 grid-pattern opacity-15" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Let's build together
            </div>
            <h2 className="font-display text-4xl lg:text-6xl text-white tracking-tight leading-[1.05] text-balance">
              Ready to Grow Your{' '}
              <span className="italic text-gold-gradient">Insurance Business?</span>
            </h2>
            <p className="mt-6 text-navy-300 text-lg leading-relaxed max-w-xl mx-auto">
              Let's build the future together. Schedule a Zoom meeting and discover
              how JSB Firm can help your agency scale.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-navy-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Video className="w-4 h-4" />
                Schedule a Zoom Meeting
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#partners"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
