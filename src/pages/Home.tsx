import { Link } from 'react-router-dom';
import { Video, ArrowRight, Handshake } from 'lucide-react';
import CarrierMarquee from '@/components/CarrierMarquee';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

export default function Home() {
  return (
    <>
    <section className="relative min-h-screen flex items-center pt-32 pb-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-navy-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
              The Future of Insurance <span className="italic text-gold-gradient">Starts Here.</span>
            </h1>

            <p className="mt-7 text-lg text-navy-500 leading-relaxed max-w-xl">
              Setting the New Standard for Insurance Growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/25 hover:-translate-y-0.5"
              >
                <Video className="w-4 h-4 text-gold" />
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
                  className="w-full h-[460px] object-cover"
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

      {/* Carrier marquee */}
      <section className="relative pt-6 pb-16 lg:pb-20 bg-navy-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Trusted Carriers
            </span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl text-navy-900 tracking-tight leading-tight text-balance">
              Proud to partner with some of the industry's top carriers
            </h2>
          </div>
          <CarrierMarquee />
        </div>
      </section>
    </>
  );
}
