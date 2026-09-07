import React from 'react';
import { Target, Compass, ShieldCheck, Award, Handshake, Users, Globe, Lightbulb } from 'lucide-react';
import { MISSION_STATEMENT, VISION_STATEMENT, COMPANY_VALUES } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

export default function MissionVisionValues() {
  const { currentTheme, getRadiusClass } = useTheme();
  const cardRadius = getRadiusClass('card');
  const btnRadius = getRadiusClass('btn');

  const getIcon = (id: string) => {
    switch (id) {
      case 'integrity':
        return <ShieldCheck className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      case 'standards':
        return <Award className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      case 'partnership':
        return <Handshake className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      case 'human-centred':
        return <Users className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      case 'african-talent':
        return <Globe className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      case 'innovation':
        return <Lightbulb className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
      default:
        return <Award className={`w-5 h-5 ${currentTheme.classes.accentText}`} />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="w-6 h-0.5 inline-block" style={{ backgroundColor: currentTheme.palette.accent }} />
            <span className="font-semibold" style={{ color: currentTheme.palette.accent }}>Foundational Purpose and Ethos</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight ${currentTheme.fontDisplay}`}>
            Built to elevate African talent and fortify growing enterprises.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our approach blends strategic HR leadership with practical operational know-how — built through direct experience supporting organizations across healthcare, technology, professional services, and social impact sectors.
          </p>
        </div>

        {/* Mission and Vision Dual Anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className={`bg-white ${cardRadius} p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-all text-left`}>
            <div className={`w-12 h-12 ${btnRadius} bg-slate-100 flex items-center justify-center mb-6`}>
              <Target className={`w-6 h-6 ${currentTheme.classes.accentText}`} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {MISSION_STATEMENT.title}
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold text-slate-900 mt-2 mb-4 ${currentTheme.fontDisplay}`}>
              Connecting Capability with Opportunity
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {MISSION_STATEMENT.statement}
            </p>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.palette.accent }} />
              <span>Embedded people operations and comprehensive labour law compliance</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`bg-slate-950 text-white ${cardRadius} p-8 border border-slate-800 shadow-sm relative overflow-hidden group text-left`}>
            <div className={`w-12 h-12 ${btnRadius} bg-slate-900 border border-slate-800 flex items-center justify-center mb-6`}>
              <Compass className={`w-6 h-6 ${currentTheme.classes.accentText}`} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {VISION_STATEMENT.title}
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold text-white mt-2 mb-4 ${currentTheme.fontDisplay}`}>
              Recognized, Valued and Placed Without Limits
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {VISION_STATEMENT.statement}
            </p>
            <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Championing continental competitiveness in both domestic and international markets</span>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-8 pt-6">
          <div className="text-left space-y-2 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: currentTheme.palette.accent }}>
              WHAT WE STAND FOR
            </span>
            <h3 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 ${currentTheme.fontDisplay}`}>
              Our values aren't decorative — they shape every conversation we have, every placement we make and every policy we write.
            </h3>
          </div>

          {/* 6 Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_VALUES.map((val) => (
              <div
                key={val.id}
                className={`bg-white ${cardRadius} p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left`}
              >
                <div>
                  <div className={`w-10 h-10 ${btnRadius} bg-slate-100 flex items-center justify-center mb-4`}>
                    {getIcon(val.id)}
                  </div>
                  <h4 className={`text-lg font-bold text-slate-900 mb-2 ${currentTheme.fontDisplay}`}>
                    {val.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
