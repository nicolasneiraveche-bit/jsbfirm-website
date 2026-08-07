import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'For Agents', to: '/agents' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Partners', to: '/partners' },
  { label: 'Join Us', to: '/join' },
  { label: 'CHOICE', to: '/choice' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img
              src="/JSB_Firm_Logo_latest_transparent.png"
              alt="JSB Firm logo"
              className="h-20 w-auto max-w-[300px] object-contain"
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
              href="mailto:office@jsbfirm.com"
              aria-label="Email"
              className="w-9 h-9 rounded-lg border border-navy-200 flex items-center justify-center text-navy-500 hover:text-gold hover:border-gold/40 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p className="text-xs text-navy-400">
              <span className="font-semibold text-navy-600">JSB FIRM</span> Home base for independent agents and agencies, Medicare, life, and general lines. Built to help you grow.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <a
              href="mailto:office@jsbfirm.com"
              className="text-xs text-navy-400 hover:text-navy-700 transition-colors duration-200"
            >
              office@jsbfirm.com
            </a>
            <p className="text-xs text-navy-400">
              &copy; {new Date().getFullYear()} JSB Firm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
