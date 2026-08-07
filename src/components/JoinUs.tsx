import { useState, type FormEvent } from 'react';
import {
  Mail,
  Video,
  Send,
  CheckCircle2,
  Loader2,
  User,
  Building2,
  Briefcase,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Users,
} from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'office@jsbfirm.com', href: 'mailto:office@jsbfirm.com' },
  { icon: Video, label: 'Zoom Meetings', value: 'Book a meeting', href: CALENDLY_URL },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type RoleType = 'agent' | 'agency' | 'corporate';

const roles: { id: RoleType; label: string; icon: typeof User }[] = [
  { id: 'agent', label: 'Agent', icon: User },
  { id: 'agency', label: 'Agency', icon: Building2 },
  { id: 'corporate', label: 'Corporate / Other', icon: Briefcase },
];

const perks = [
  {
    icon: TrendingUp,
    title: 'Real room to grow',
    desc: 'As you produce, we invest more into you — more leads, more support, more opportunity to build a team of your own.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance that has your back',
    desc: 'CMS and state requirements handled at the organizational level, so you are supported, not left exposed.',
  },
  {
    icon: Sparkles,
    title: 'Training from real agents',
    desc: 'Taught by people who carried a quota, not people who read about one.',
  },
  {
    icon: Users,
    title: 'Your book is yours',
    desc: "No fine print that quietly takes it back. What you build stays yours — we're here to help you build it.",
  },
];

export default function JoinUs() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [role, setRole] = useState<RoleType>('agent');

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
      submitter_type: role,
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-form-submission`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ type: 'contact', data: payload }),
        },
      );

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-pattern opacity-60" />
          <div className="absolute top-0 right-0 w-[55%] h-[70%] bg-gradient-to-bl from-navy-100/80 via-gold-50/40 to-transparent rounded-bl-[200px]" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl animate-shimmer" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy-100/50 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-navy-600 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Join Us
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-navy-900 tracking-tightest leading-[1.02] text-balance">
              Build your career{' '}
              <span className="italic text-gold-gradient">with backing.</span>
            </h1>

            <p className="mt-6 text-lg text-navy-500 leading-relaxed max-w-2xl">
              We're looking for agents and agencies who want to grow — and people
              who want to build the future of insurance alongside us. Tell us
              about yourself and we'll be in touch.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join */}
      <div className="relative py-14 lg:py-20 bg-navy-50/40">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Why Join JSB
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              A place where your work is backed, not just watched.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className="reveal group relative rounded-2xl bg-white border border-navy-200/60 p-6 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-400 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center mb-5 group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-navy-900 text-base">{p.title}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{p.desc}</p>
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 reveal">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                Apply
              </span>
              <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
                Let's start a{' '}
                <span className="italic text-gold-gradient">conversation.</span>
              </h2>
              <p className="mt-5 text-navy-500 leading-relaxed text-lg">
                Tell us a bit about yourself and what you're looking for. A member
                of our team will reach out within one business day.
              </p>

              <div className="mt-10 space-y-3">
                {contactInfo.map((info) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-xl border border-navy-200/60 bg-white p-4 hover:border-navy-300 transition-colors duration-300 group">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy-50 border border-navy-200/60 flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-navy-700 group-hover:text-gold transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-xs text-navy-400 font-medium uppercase tracking-wider">
                          {info.label}
                        </div>
                        <div className="text-sm font-medium text-navy-900 mt-0.5">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <div className="rounded-3xl border border-navy-200/60 bg-white p-8 lg:p-10 shadow-sm">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-display text-2xl text-navy-900">Application received</h3>
                    <p className="mt-2 text-navy-500 text-sm max-w-sm">
                      Thank you for your interest in joining JSB Firm. A member of
                      our team will get back to you within one business day.
                    </p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300"
                    >
                      <Video className="w-4 h-4 text-gold" />
                      Book a Meeting Now
                    </a>
                  </div>
                ) : (
                  <>
                    {/* Role tabs */}
                    <div className="mb-8">
                      <div className="flex gap-2 p-1.5 rounded-2xl bg-navy-50 border border-navy-200/60">
                        {roles.map((r) => (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setRole(r.id)}
                            className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                              role === r.id
                                ? 'bg-navy-900 text-white shadow-sm'
                                : 'text-navy-500 hover:text-navy-700'
                            }`}
                          >
                            <r.icon className="w-4 h-4" />
                            {r.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                            Name
                          </label>
                          <input
                            name="name"
                            required
                            type="text"
                            placeholder="John Smith"
                            className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                            {role === 'agency'
                              ? 'Agency Name'
                              : role === 'corporate'
                                ? 'Current Company (optional)'
                                : 'Agency (optional)'}
                          </label>
                          <input
                            name="company"
                            type="text"
                            required={role === 'agency'}
                            placeholder={
                              role === 'agency'
                                ? 'Your agency name'
                                : role === 'corporate'
                                  ? 'Where you work today'
                                  : 'Your agency (if applicable)'
                            }
                            className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                            Email
                          </label>
                          <input
                            name="email"
                            required
                            type="email"
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                            Phone
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            placeholder="(555) 000-0000"
                            className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                          Tell us about yourself
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder={
                            role === 'agent'
                              ? "Tell us about your experience, licenses, and what you're looking to achieve..."
                              : role === 'agency'
                                ? "Tell us about your agency, team size, and what you're looking to achieve..."
                                : "Tell us about your background, what role you're interested in, and what you'd bring to the team..."
                          }
                          className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200 resize-none"
                        />
                      </div>
                      {status === 'error' && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                          Something went wrong submitting your application. Please
                          try again or email us directly at office@jsbfirm.com.
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
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-gold" />
                            Submit Application
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
      </div>
    </section>
  );
}
