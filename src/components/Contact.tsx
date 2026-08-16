import { useState, type FormEvent } from 'react';
import { Mail, Video, Languages, Send, CheckCircle2, Loader2, User, Building2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'office@jsbfirm.com', href: 'mailto:office@jsbfirm.com' },
  { icon: Video, label: 'Zoom Meetings', value: 'Book a meeting', href: 'https://calendly.com/office-jsbfirm/30min' },
  { icon: Languages, label: 'Support', value: 'English & Spanish' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type SubmitterType = 'agent' | 'agency';

const tabs: { id: SubmitterType; label: string; icon: typeof User }[] = [
  { id: 'agent', label: "I'm an Agent", icon: User },
  { id: 'agency', label: "I'm an Agency", icon: Building2 },
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [tab, setTab] = useState<SubmitterType>('agent');

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
      submitter_type: tab,
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
    <section id="contact" className="relative py-20 lg:py-24 bg-navy-50/40">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Contact
            </span>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Let's start a{' '}
              <span className="italic text-gold-gradient">conversation.</span>
            </h2>
            <p className="mt-4 text-navy-500 leading-relaxed text-lg">
              Whether you're an independent agent looking for the right tools or
              an agency ready to scale, we'd love to hear from you.
            </p>

            <div className="mt-8 space-y-3">
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
                  <h3 className="font-display text-2xl text-navy-900">Message sent</h3>
                  <p className="mt-2 text-navy-500 text-sm max-w-sm">
                    Thank you for reaching out. A member of our team will get back
                    to you within one business day.
                  </p>
                  <a
                    href="https://calendly.com/office-jsbfirm/30min"
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
                  {/* Tabs */}
                  <div className="mb-6">
                    <div className="flex gap-2 p-1.5 rounded-2xl bg-navy-50 border border-navy-200/60">
                      {tabs.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTab(t.id)}
                          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            tab === t.id
                              ? 'bg-navy-900 text-white shadow-sm'
                              : 'text-navy-500 hover:text-navy-700'
                          }`}
                        >
                          <t.icon className="w-4 h-4" />
                          {t.label}
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
                          {tab === 'agent' ? 'Agency (optional)' : 'Agency Name'}
                        </label>
                        <input
                          name="company"
                          type="text"
                          required={tab === 'agency'}
                          placeholder={tab === 'agent' ? 'Your agency (if applicable)' : 'Your agency name'}
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
                          placeholder="john@agency.com"
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
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder={
                          tab === 'agent'
                            ? "Tell us about your goals and what you're looking to achieve..."
                            : "Tell us about your agency, team size, and what you're looking to achieve..."
                        }
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold" />
                          Send Message
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
