'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (codeRef.current) {
        codeRef.current.style.transform = `translate(${x * 18}px, ${y * 12}px)`;
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      
      {/* Background atmospheric blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)',
            filter: 'blur(60px)'
          }} />
        
        <div
          className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #F0EDE8 0%, transparent 70%)',
            filter: 'blur(80px)'
          }} />
        
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full">
        {/* Top row */}
        <div className="flex items-start justify-between mb-12 md:mb-20">
          <div className="space-y-5">
            {/* Announcement badge */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary pulse-glow flex-shrink-0" />
              <span className="mono-label">
                New: GPT-5 Automation Guide just dropped
              </span>
              <Icon name="ArrowRightIcon" size={12} className="text-primary" variant="outline" />
            </div>

            {/* Main headline */}
            <div>
              <h1 className="hero-display text-foreground uppercase">
                Learn
              </h1>
              <h1 className="hero-display-accent uppercase">
                AI & Tech
              </h1>
              <h1 className="hero-display text-foreground uppercase">
                Without
              </h1>
              <div className="flex items-end gap-6 flex-wrap">
                <h1 className="hero-display text-foreground uppercase">
                  The
                </h1>
                <h1 className="hero-display-accent uppercase">
                  Noise.
                </h1>
              </div>
            </div>
          </div>

          {/* Right side floating code card */}
          <div
            ref={codeRef}
            className="hidden lg:block flex-shrink-0 transition-transform duration-300 ease-out"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            
            <div className="float-slow">
              <div
                className="border border-border rounded-2xl overflow-hidden"
                style={{ background: 'rgba(19, 20, 31, 0.9)', backdropFilter: 'blur(12px)', width: '320px' }}>
                
                {/* Code card header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="mono-label ml-3">ai_workflow.js</span>
                </div>
                {/* Code content */}
                <div className="p-4 font-mono text-xs leading-relaxed">
                  <p className="text-muted-foreground">
                    <span className="text-primary">const</span>{' '}
                    <span className="text-foreground">workflow</span>{' '}
                    <span className="text-muted-foreground">=</span>
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    <span className="text-primary">automate</span>
                    <span className="text-foreground">(data)</span>
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    <span className="text-primary">// </span>
                    <span className="text-foreground/60">no jargon</span>
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary">// </span>
                    <span className="text-foreground/60">just signal</span>
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-primary rounded-sm animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-12 gap-8 items-end border-t border-border pt-12">
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg md:text-xl font-medium text-foreground/70 leading-relaxed max-w-md">
              Weekly insights on AI automation, tools, and workflows —
              <span className="text-foreground font-semibold"> written for humans, not robots.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#newsletter" className="btn-primary">
                Read For Free
              </a>
              <a href="#articles" className="btn-ghost">
                Browse Articles
              </a>
            </div>
            <p className="mono-label">
              🔒 Zero spam — unsubscribe anytime
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="aspect-video rounded-2xl overflow-hidden relative group border border-border">
              <AppImageHero />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full border-2 border-foreground/80 flex items-center justify-center backdrop-blur-sm bg-background/30">
                  <Icon name="PlayIcon" size={24} className="text-foreground ml-1" variant="solid" />
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4">
                <span className="article-category-pill">
                  Latest: GPT-5 Automation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function AppImageHero() {
  return (
    <div className="w-full h-full bg-secondary relative overflow-hidden grayscale-hover">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://img.rocket.new/generatedImages/rocket_gen_img_19f8fe7fc-1772547120162.png"
        alt="Abstract neural network visualization with glowing nodes on dark background"
        className="w-full h-full object-cover transition-all duration-1000 grayscale brightness-90 group-hover:grayscale-0"
        loading="eager" />
      
    </div>);

}