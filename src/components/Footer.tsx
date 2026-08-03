import { Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img
                src="/JSB_Firm_Logo.png"
                alt="JSB Firm logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full gold-gradient" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-navy-900 font-semibold text-lg tracking-tight">JSB Firm</span>
              <span className="text-navy-400 text-[10px] tracking-[0.18em] uppercase font-medium">
                Insurance Solutions
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy-500 hover:text-navy-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-lg border border-navy-200 flex items-center justify-center text-navy-500 hover:text-gold hover:border-gold/40 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:office@jsbfirm.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg border border-navy-200 flex items-center justify-center text-navy-500 hover:text-gold hover:border-gold/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} JSB Firm. All rights reserved.
          </p>
          <p className="text-xs text-navy-400">
            Modern insurance solutions for the next generation.
          </p>
        </div>
      </div>
    </footer>
  );
}
