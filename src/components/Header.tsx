import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact', to: '/contact' },
];

const choiceUrl = 'https://choiceinnovate.com/';

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
        scrolled || open ? 'glass border-b border-navy-200/60 py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img
                src="/JSB_Firm_Logo.png"
                alt="JSB Firm logo"
                className="w-10 h-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full gold-gradient" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-navy-900 font-semibold text-lg tracking-tight">JSB Firm</span>
              <span className="text-navy-400 text-[10px] tracking-[0.18em] uppercase font-medium">
                Insurance Solutions
              </span>
            </div>
          </Link>
          <div className="hidden sm:block w-px h-8 bg-navy-200" />
          <a
            href={choiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 group"
          >
            <img
              src="/1.png"
              alt="CHOICE Innovate logo"
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
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
          <a
            href={choiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors duration-200 group"
          >
            CHOICE
            <span className="absolute bottom-1 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-navy-800 transition-all duration-300 hover:shadow-lg hover:shadow-navy-900/20"
          >
            <Calendar className="w-4 h-4 text-gold" />
            Book a Meeting
          </Link>
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
          <a
            href={choiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="px-4 py-3 text-sm font-medium text-navy-700 hover:text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
          >
            CHOICE
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-medium text-white"
          >
            <Calendar className="w-4 h-4 text-gold" />
            Book a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}
