'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    quote: "I've tried a dozen AI newsletters. MayurLife is the only one I actually read the same day it lands.",
    name: 'Priya Nair',
    role: 'Product Manager, Bengaluru',
    initials: 'PN',
  },
  {
    quote: 'The open rate says 48% — I believe it. Every issue has at least one thing I immediately put into practice.',
    name: 'James Kowalski',
    role: 'Founder, Chicago',
    initials: 'JK',
  },
  {
    quote: 'Finally — AI content that doesn\'t assume I have a PhD. The tutorials section alone is worth subscribing.',
    name: 'Amara Osei',
    role: 'Marketing Lead, London',
    initials: 'AO',
  },
];

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    // Mock submit — replace with backend integration
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="py-12 pb-24 border-t border-border"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Blueprint grid layout */}
        <div className="blueprint-grid grid-cols-1 lg:grid-cols-12">
          {/* Left — big editorial CTA */}
          <div className="blueprint-cell lg:col-span-7 space-y-10 relative overflow-hidden">
            {/* Background glow */}
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="relative z-10 space-y-6">
              <span className="section-label">Weekly Signal</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase italic leading-[0.9]">
                Stay Ahead<br />
                <span className="text-primary">Of The</span><br />
                AI Curve.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Every Tuesday — one curated issue with the AI tools, workflows, and
                insights worth your 5 minutes.{' '}
                <span className="text-foreground font-semibold">No fluff. Just signal.</span>
              </p>
            </div>

            {/* What you get */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: 'BoltIcon', text: '1 key AI tool breakdown per issue' },
                { icon: 'DocumentTextIcon', text: '2–3 curated articles worth your time' },
                { icon: 'LightBulbIcon', text: '1 actionable workflow or prompt' },
                { icon: 'ChartBarIcon', text: 'Real numbers, no sponsored spin' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                      name={item.icon as Parameters<typeof Icon>[0]['name']}
                      size={12}
                      className="text-primary"
                      variant="solid"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form + testimonials */}
          <div className="blueprint-cell lg:col-span-5 bg-secondary space-y-8 flex flex-col justify-between">
            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email-input" className="section-label block">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-muted border border-border rounded-xl px-4 py-4 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  {error && (
                    <p className="text-xs text-red-400 font-medium">{error}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  style={{ padding: '1rem 2rem' }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Icon name="EnvelopeIcon" size={16} variant="solid" />
                      Subscribe — It&apos;s Free
                    </>
                  )}
                </button>

                <p className="mono-label text-center">
                  🔒 No spam, ever. Unsubscribe in one click.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="CheckCircleIcon" size={32} className="text-primary" variant="solid" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">You&apos;re in!</h3>
                <p className="text-sm text-muted-foreground">
                  Check your inbox — first issue lands next Tuesday.
                </p>
                <p className="mono-label">Takes 10 seconds. Cancel anytime.</p>
              </div>
            )}

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-grow h-px bg-border" />
              <span className="mono-label">What readers say</span>
              <div className="flex-grow h-px bg-border" />
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`p-4 rounded-xl border border-border bg-muted/30 transition-all duration-500 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 120 + 200}ms` }}
                >
                  <p className="text-xs text-foreground/80 leading-relaxed mb-3 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[0.55rem] font-black text-primary">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{t.name}</p>
                      <p className="text-[0.6rem] text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <Icon key={si} name="StarIcon" size={10} className="text-primary" variant="solid" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip — social proof numbers */}
        <div className="blueprint-grid grid-cols-3 mt-px">
          <div className="blueprint-cell flex items-center justify-center gap-3 py-6">
            <span className="text-2xl font-black text-primary italic">5,200+</span>
            <span className="mono-label">Subscribers</span>
          </div>
          <div className="blueprint-cell flex items-center justify-center gap-3 py-6">
            <span className="text-2xl font-black text-primary italic">48%</span>
            <span className="mono-label">Open Rate</span>
          </div>
          <div className="blueprint-cell flex items-center justify-center gap-3 py-6">
            <span className="text-2xl font-black text-primary italic">4.8★</span>
            <span className="mono-label">Avg Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}