import { useState } from 'react';
import { Plus, Minus, Briefcase, Sparkles, Award, Compass } from 'lucide-react';

type Leader = {
  name: string;
  initials: string;
  photo: string;
  role: string;
  tagline: string;
  background: string;
  currentRole: string;
  strengths: string[];
  beyondOffice: string;
  accent: string;
};

const leaders: Leader[] = [
  {
    name: 'Javier Castillo',
    initials: 'JC',
    photo: '/javier.png',
    role: 'Founder & Chief Executive Officer',
    tagline:
      'Entrepreneurial operator bringing a product-led perspective to insurance and building JSB Firm around a clearer, more customer-centered future.',
    background:
      "Javier's path to CEO was entrepreneurial rather than technical first. He built and successfully ran a marketing technology company, where hands-on work with front-end systems and digital infrastructure taught him to identify structural gaps most executives never see. That instinct led him to insurance: a legacy industry still organized around transactions while customers increasingly expect products. Javier brought key players together to found JSB Firm and lead its flagship platform, CHOICE.",
    currentRole:
      'As Founder & CEO of JSB Firm, Javier sets strategies the company can execute against, allocates capital with discipline, builds and retains the right team, and maintains credibility with the people who decide whether to fund, partner with, or join the company.',
    strengths: [
      'Strategic vision',
      'Talent recruitment & team building',
      'Applied technical fluency',
      'Investor & partner trust',
      'Capital discipline',
    ],
    beyondOffice:
      'Javier spends his free time with family and friends, staying active, and following clean digital design and consumer psychology.',
    accent: 'from-navy-900 to-navy-700',
  },
  {
    name: 'Benjamin Sullivan',
    initials: 'BS',
    photo: '/benjamin.png',
    role: 'Founder & Chief Operating Officer',
    tagline:
      'Insurance-agency executive with experience leading an organization of more than 100 licensed agents.',
    background:
      "Benjamin has built his career in insurance operations as the CEO of an insurance agency with more than 100 licensed agents. That experience has given him a practical understanding of regulated sales environments, agent enablement, quality standards, and the operating discipline required to support a distributed team at scale.",
    currentRole:
      "As Chief Operating Officer of JSB Firm, Benjamin owns the operational engine behind the company's strategy, establishing scalable workflows and coordinating cross-functional execution across the business.",
    strengths: [
      'Operational scale',
      'Insurance-domain perspective',
      'Agent enablement',
      'Process discipline',
      'Quality and performance management',
    ],
    beyondOffice:
      'Benjamin enjoys connecting with people, supporting team development, and maintaining an active, balanced lifestyle.',
    accent: 'from-navy-800 to-navy-600',
  },
  {
    name: 'Muhammad Shahban',
    initials: 'MS',
    photo: '/shabhan.png',
    role: 'Founder & Chief Technology Officer',
    tagline:
      'Performance-marketing and technology leader with six years of CEO/CTO experience in lead generation, PPC, and Meta advertising.',
    background:
      'Muhammad has spent the last six years leading a lead-generation agency as CEO/CTO, specializing in PPC and Meta advertising for larger agencies in the insurance field. His work sits at the intersection of paid-media execution, technical systems, and data-informed optimization.',
    currentRole:
      "As Chief Technology Officer of JSB Firm, Muhammad leads the technology and performance-marketing roadmap across the company's products, turning data and automation into dependable capabilities that support growth.",
    strengths: [
      'PPC and Meta ads',
      'Insurance lead generation',
      'Marketing technology',
      'Data-driven optimization',
      'Systems thinking',
    ],
    beyondOffice:
      'Muhammad enjoys technology, continuous learning, and exploring the fast-moving tools shaping digital business.',
    accent: 'from-navy-900 to-navy-600',
  },
  {
    name: 'Nick Veche',
    initials: 'NV',
    photo: '/nick.png',
    role: 'Director of Finance & Operations',
    tagline:
      "Billing and operations leader who pairs hands-on financial management with applied AI to make JSB Firm's back office faster and more reliable.",
    background:
      'Nick built his career managing the operational and financial backbone of client-facing organizations, serving as Billing Manager and Operations Manager. Alongside that foundation, he has developed strong applied experience with AI tools and workflows, streamlining billing accuracy, reporting, and operational processes.',
    currentRole:
      'As Director of Finance & Operations of JSB Firm, Nick owns billing integrity, operational workflows, and the systems that connect finance to day-to-day execution across the company.',
    strengths: [
      'Billing & revenue operations',
      'Operations management',
      'Applied AI & automation',
      'Process discipline',
      'Cross-functional execution',
    ],
    beyondOffice:
      'Nick values continual learning, staying current with emerging AI tools, and applying that curiosity to make everyday operations simpler.',
    accent: 'from-navy-800 to-navy-700',
  },
  {
    name: 'Dave Asaad',
    initials: 'DA',
    photo: '/WhatsApp_Image_2026-08-05_at_11.29.38.jpeg',
    role: 'Sales Director',
    tagline:
      "Client-facing leader driving revenue growth and long-term customer relationships across JSB Firm's book of business.",
    background:
      'Dave has built his career at the intersection of sales and client success, working directly with clients to drive adoption, retention, and growth while managing sales pipelines and performance.',
    currentRole:
      "As Sales Manager at JSB Firm, Dave owns the client lifecycle from acquisition through long-term retention, aligning sales strategy with the service standards that keep clients loyal.",
    strengths: [
      'Client relationship management',
      'Sales strategy & execution',
      'Retention & account growth',
      'Team leadership',
      'Customer advocacy',
    ],
    beyondOffice:
      'Dave values building genuine relationships with clients and teammates alike, and stays focused on growth.',
    accent: 'from-navy-900 to-navy-800',
  },
];

function LeaderCard({ leader, index }: { leader: Leader; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`reveal group relative ${
        index % 2 === 1 ? 'lg:mt-16' : ''
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="relative rounded-3xl border border-navy-800/60 bg-navy-950 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Avatar header */}
        <div className="relative h-72 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${leader.accent}`} />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gold/10 blur-2xl" />
              <img
                src={leader.photo}
                alt={leader.name}
                className="relative w-40 h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl"
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  const fallback = img.nextElementSibling as HTMLElement | null;
                  if (fallback) {
                    img.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div
                className="relative w-40 h-40 rounded-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
                style={{ display: 'none' }}
              >
                <span className="font-display text-5xl font-semibold text-white tracking-tight">
                  {leader.initials}
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gold-gradient ring-4 ring-white/10" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
        </div>

        {/* Content */}
        <div className="px-8 pb-8 -mt-8 relative">
          <div className="text-center">
            <h3 className="font-display text-2xl text-white tracking-tight">
              {leader.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gold tracking-wide">
              {leader.role}
            </p>
            <p className="mt-4 text-sm text-navy-200 leading-relaxed max-w-md mx-auto">
              {leader.tagline}
            </p>
          </div>

          {/* Expandable detail */}
          <div
            className={`grid transition-all duration-500 ease-out ${
              expanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-6 pt-2">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-gold" />
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
                      Professional Background
                    </h4>
                  </div>
                  <p className="text-sm text-navy-200 leading-relaxed">
                    {leader.background}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
                      Current Role
                    </h4>
                  </div>
                  <p className="text-sm text-navy-200 leading-relaxed">
                    {leader.currentRole}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-gold" />
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
                      Leadership Strengths
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leader.strengths.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-4 h-4 text-gold" />
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
                      Beyond the Office
                    </h4>
                  </div>
                  <p className="text-sm text-navy-200 leading-relaxed">
                    {leader.beyondOffice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            {expanded ? (
              <>
                <Minus className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Read Full Profile
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-12 lg:py-16 bg-navy-50/40">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-navy-900 tracking-tight leading-tight text-balance">
            Leadership built for growth,{' '}
            <span className="italic text-gold-gradient">execution, and scale.</span>
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed text-lg">
            A complementary executive team across demand generation, insurance
            operations, product, technology-enabled marketing, and brand.
          </p>
        </div>

        {/* Executive team bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 reveal">
          {leaders.map((l, i) => (
            <div key={l.name} className="flex items-center gap-3">
              <span className="text-sm font-medium text-navy-100">{l.name}</span>
              {i < leaders.length - 1 && (
                <span className="text-navy-300">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Leader cards */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>

        {/* Confidential footer */}
        <p className="mt-10 text-center text-xs font-medium text-navy-400 uppercase tracking-[0.2em] reveal">
          Confidential &middot; 2026
        </p>
      </div>
    </section>
  );
}
