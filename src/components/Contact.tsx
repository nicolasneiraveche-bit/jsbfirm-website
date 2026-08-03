import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Video, Languages, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'office@jsbfirm.com', href: 'mailto:office@jsbfirm.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with us', href: '#' },
  { icon: Video, label: 'Zoom Meetings', value: 'Available on request' },
  { icon: Languages, label: 'Support', value: 'English & Spanish' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-navy-50/40">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
              Contact
            </span>
            <h2 className="mt-5 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
              Let's start a{' '}
              <span className="italic text-gold-gradient">conversation.</span>
            </h2>
            <p className="mt-5 text-navy-500 leading-relaxed text-lg">
              Whether you're looking to scale your agency, explore a partnership,
              or learn more about our solutions — we'd love to hear from you.
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-navy-900">Message sent</h3>
                  <p className="mt-2 text-navy-500 text-sm max-w-sm">
                    Thank you for reaching out. A member of our team will get back
                    to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy-600 uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your agency"
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
                      required
                      rows={5}
                      placeholder="Tell us about your agency and what you're looking to achieve..."
                      className="w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:border-gold focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/20"
                  >
                    <Send className="w-4 h-4 text-gold" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
