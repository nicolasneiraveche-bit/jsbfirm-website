import { useState, type FormEvent } from 'react';
import {
  Bot,
  Users,
  ShieldCheck,
  DollarSign,
  LayoutDashboard,
  Layers,
  ArrowRight,
  Sparkles,
  Check,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Sales Automation',
    desc: 'Automated follow-ups, smart lead scoring, and AI-driven insights that help agents close more without the manual work.',
  },
  {
    icon: Users,
    title: 'Client & Lead Management',
    desc: 'A unified pipeline for every contact, lead, and client — with full history, notes, and lifecycle tracking in one place.',
  },
  {
    icon: ShieldCheck,
    title: 'Enrollment & Compliance Tools',
    desc: 'Built-in enrollment workflows and compliance guardrails keep every submission accurate and audit-ready.',
  },
  {
    icon: DollarSign,
    title: 'Commission Tracking',
    desc: "Real-time commission visibility across carriers and products, so agents always know what they earn and what's pending.",
  },
  {
    icon: LayoutDashboard,
    title: 'Team Management Dashboard',
    desc: 'Performance metrics, activity tracking, and reporting that give sales leaders a clear view of the whole team.',
  },
  {
    icon: Layers,
    title: 'All-in-One Platform',
    desc: 'Replaces 6+ separate tools — CRM, dialer, enrollment, commissions, compliance, and reporting — at a fraction of the cost.',
  },
];

const replacedTools = [
  'CRM',
  'Dialer',
  'Enrollment software',
  'Commission tracker',
  'Compliance tools',
  'Reporting dashboard',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ChoiceInnovate() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get('name') as string).trim(),
      email: (formData.get('email') as string).trim(),
      phone: (formData.get('phone') as string)?.trim() || null,
      company: (formData.get('company') as string)?.trim() || null,
      message: (formData.get('message') as string)?.trim() || null,
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    const { error } = await supabase.from('choice_leads').insert(payload);

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    form.reset();
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <section id="choice" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[45%] h-[60%] bg-gradient-to-br from-navy-50 to-transparent rounded-br-[200px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              A JSB Firm Product
            </div>

            <div className="mb-6">
              <img
                src="/1.png"
                alt="CHOICE Innovate logo"
                className="h-20 w-auto mb-4"
              />
              <p className="text-sm text-navy-400 font-medium uppercase tracking-wider">
                CRM Platform
              </p>
            </div>

            <p className="mt-3 text-lg text-navy-500 leading-relaxed">
              CHOICE Innovate is the next-generation CRM platform built for
              insurance agents. Manage clients, automate sales, track commissions,
              and scale your business — all from one login.
            </p>

            <div className="mt-8 rounded-2xl border border-navy-200/60 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">One platform. Six fewer tools.</h3>
                  <p className="text-sm text-navy-500 mt-0.5">Everything an agent needs, nothing they don't.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {replacedTools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 border border-navy-200/60 px-3 py-1.5 text-xs font-medium text-navy-500 line-through decoration-gold/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-navy-900">
                <Check className="w-4 h-4 text-gold" />
                Replaced by one CHOICE Innovate login
              </div>
            </div>

            <a
              href="#choice-demo"
              className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/20"
            >
              I Want More Info
              <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                    <feature.icon className="w-5.5 h-5.5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-navy-900 text-base">{feature.title}</h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>

            <div className="reveal mt-5 rounded-2xl bg-navy-900 p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="font-display text-2xl text-white">
                    Built for agents, not investors.
                  </h3>
                  <p className="mt-2 text-sm text-navy-300 max-w-md leading-relaxed">
                    Every feature exists because an agent needs it — not because it
                    looks good on a pitch deck. That's why CHOICE Innovate costs
                    a fraction of what you're paying for six separate tools today.
                  </p>
                </div>
                <a
                  href="#choice-demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-navy-900 hover:bg-gold hover:text-white transition-all duration-300 flex-shrink-0"
                >
                  Book a Meeting
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Lead capture form */}
            <div id="choice-demo" className="reveal mt-5 rounded-2xl border border-navy-200/60 bg-white p-8 lg:p-10 shadow-sm scroll-mt-28">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-900">Request received</h3>
                  <p className="mt-2 text-navy-500 text-sm max-w-sm">
                    Thank you for your interest in CHOICE Innovate. A member of our
                    team will reach out within one business day to schedule a meeting.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl text-navy-900">Book a Meeting</h3>
                    <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                      Tell us a bit about yourself and our team will reach out to
                      schedule a personalized walkthrough of CHOICE Innovate.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="ci-name" className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                          Name
                        </label>
                        <input
                          id="ci-name"
                          name="name"
                          required
                          type="text"
                          placeholder="John Smith"
                          className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="ci-company" className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                          Company
                        </label>
                        <input
                          id="ci-company"
                          name="company"
                          type="text"
                          placeholder="Your agency"
                          className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="ci-email" className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                          Email
                        </label>
                        <input
                          id="ci-email"
                          name="email"
                          required
                          type="email"
                          placeholder="john@agency.com"
                          className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="ci-phone" className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                          Phone
                        </label>
                        <input
                          id="ci-phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ci-message" className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                        Message <span className="text-navy-400 normal-case tracking-normal">(optional)</span>
                      </label>
                      <textarea
                        id="ci-message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your agency and what you're looking to achieve..."
                        className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Something went wrong submitting your request. Please try again or
                        email us directly at office@jsbfirm.com.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 text-gold animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Book a Meeting
                          <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
