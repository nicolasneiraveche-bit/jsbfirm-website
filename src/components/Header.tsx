import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/office-jsbfirm/30min';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'For Agents', to: '/agents' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Partners', to: '/partners' },
  { label: 'Join Us', to: '/join' },
];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'glass border-b border-navy-200/60 py-3' : 'py-5 bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center group">
            <img
              src="/JSB_Firm_Logo_latest_transparent.png"
              alt="JSB Firm logo"
              className="h-20 w-auto max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  isActive ? 'text-navy-900' : 'text-navy-600 hover:text-navy-900'
                }`
              }
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </NavLink>
          ))}
          <NavLink
            to="/choice"
            className="relative px-4 py-2 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors duration-200 group"
          >
            CHOICE
            <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/20"
          >
            <Calendar className="w-4 h-4 text-gold" />
            Book a Meeting
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy-900"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[32rem] mt-4' : 'max-h-0'
        }`}
      >
        <div className="mx-6 glass rounded-2xl border border-navy-200/60 p-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? 'text-navy-900 bg-navy-50' : 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/choice"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
          >
            CHOICE
          </NavLink>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-medium text-white"
          >
            <Calendar className="w-4 h-4 text-gold" />
            Book a Meeting
          </a>
        </div>
      </div>
    </header>
  );
}
