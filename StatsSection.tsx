'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  label: string;
  value: string;
  suffix: string;
  description: string;
  icon: string;
  accent?: boolean;
}

const stats: Stat[] = [
  {
    label: 'Subscribers',
    value: '5,200',
    suffix: '+',
    description: 'Professionals staying ahead of the AI curve',
    icon: 'UserGroupIcon',
  },
  {
    label: 'Open Rate',
    value: '48',
    suffix: '%',
    description: 'Industry avg is 21% — signal beats noise',
    icon: 'EnvelopeOpenIcon',
    accent: true,
  },
  {
    label: 'Avg Rating',
    value: '4.8',
    suffix: '★',
    description: 'From verified reader reviews',
    icon: 'StarIcon',
  },
  {
    label: 'Articles',
    value: '120',
    suffix: '+',
    description: 'Practical guides, tutorials & deep dives',
    icon: 'DocumentTextIcon',
  },
];

function useCountUp(target: string, isVisible: boolean) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isVisible) return;
    const numericPart = parseFloat(target.replace(/,/g, ''));
    if (isNaN(numericPart)) { setDisplay(target); return; }

    const duration = 1200;
    const steps = 40;
    const increment = numericPart / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, numericPart);
      if (numericPart >= 1000) {
        setDisplay(Math.round(current).toLocaleString());
      } else {
        setDisplay(current >= 10 ? current.toFixed(1) : current.toFixed(1));
      }
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return display;
}

function StatCell({ stat, isVisible, index }: { stat: Stat; isVisible: boolean; index: number }) {
  const displayValue = useCountUp(stat.value, isVisible);

  return (
    <div
      className={`blueprint-cell flex flex-col justify-between min-h-[220px] md:min-h-[260px] ${
        stat.accent ? 'bg-primary' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between">
        <span
          className={`section-label ${stat.accent ? 'text-primary-foreground/70' : ''}`}
        >
          {stat.label}
        </span>
        <Icon
          name={stat.icon as Parameters<typeof Icon>[0]['name']}
          size={20}
          className={stat.accent ? 'text-primary-foreground/40' : 'text-primary/40'}
          variant="outline"
        />
      </div>

      <div>
        <div
          className={`stat-number ${stat.accent ? 'text-primary-foreground' : ''}`}
        >
          {isVisible ? displayValue : '0'}
          <span className={stat.accent ? 'text-primary-foreground/60' : 'text-primary'}>
            {stat.suffix}
          </span>
        </div>
        <p
          className={`text-xs font-medium mt-3 leading-relaxed ${
            stat.accent ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}
        >
          {stat.description}
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 pb-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8 border-b-4 border-foreground pb-6">
          <div className="flex items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic">
              By The Numbers.
            </h2>
          </div>
          <span className="section-label hidden md:block">
            Verified Stats // 2026
          </span>
        </div>

        {/* Blueprint grid */}
        <div className="blueprint-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCell key={stat.label} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>

        {/* Bottom row — trust strip */}
        <div className="blueprint-grid grid-cols-1 md:grid-cols-3 mt-px">
          <div className="blueprint-cell flex items-center gap-4">
            <Icon name="ShieldCheckIcon" size={20} className="text-primary flex-shrink-0" variant="outline" />
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              No Sponsored Content — Ever
            </p>
          </div>
          <div className="blueprint-cell flex items-center gap-4">
            <Icon name="ClockIcon" size={20} className="text-primary flex-shrink-0" variant="outline" />
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Published Every Tuesday
            </p>
          </div>
          <div className="blueprint-cell bg-secondary flex items-center gap-4">
            <Icon name="BoltIcon" size={20} className="text-primary flex-shrink-0" variant="solid" />
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
              5-Min Read — No Fluff
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}