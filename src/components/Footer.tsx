import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'For Agents', to: '/agents' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
  { label: 'CHOICE', to: '/choice' },
];



export default function Footer() {
  return (
    <footer className="relative border-t border-navy-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="/JSB_Firm_Logo_new_transparent.png"
              alt="JSB Firm logo"
              className="h-12 w-auto max-w-[220px] object-contain"
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-navy-500 hover:text-navy-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
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
