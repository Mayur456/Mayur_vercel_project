'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CategoryItem {
  label: string;
  count: number;
  icon: string;
  description: string;
}

const categories: CategoryItem[] = [
  { label: 'AI Automation', count: 24, icon: 'BoltIcon', description: 'Workflows that run themselves' },
  { label: 'AI Tools', count: 31, icon: 'WrenchScrewdriverIcon', description: 'Tested tools, honest reviews' },
  { label: 'Analytics', count: 18, icon: 'ChartBarIcon', description: 'Data without the PhD' },
  { label: 'Career Growth', count: 15, icon: 'ArrowTrendingUpIcon', description: 'Navigate an AI-first job market' },
  { label: 'Productivity', count: 22, icon: 'RocketLaunchIcon', description: 'Systems that scale with you' },
  { label: 'Tutorials', count: 19, icon: 'BookOpenIcon', description: 'Step-by-step, no jargon' },
  { label: 'Business Analysis', count: 11, icon: 'PresentationChartLineIcon', description: 'AI for decision-making' },
];

interface RecentItem {
  title: string;
  category: string;
  readTime: string;
  date: string;
}

const recentByCat: Record<string, RecentItem[]> = {
  'AI Automation': [
    { title: 'GPT-5 Automation: 7 Workflows That Actually Save Hours', category: 'AI Automation', readTime: '8 min', date: 'Apr 28' },
    { title: 'How to Chain AI Agents Without Losing Your Mind', category: 'AI Automation', readTime: '6 min', date: 'Apr 14' },
    { title: 'Zapier vs Make vs n8n: Which One in 2026?', category: 'AI Automation', readTime: '5 min', date: 'Apr 7' },
  ],
  'AI Tools': [
    { title: 'The 12 AI Tools Professionals Are Actually Using', category: 'AI Tools', readTime: '6 min', date: 'Apr 22' },
    { title: 'Claude 4 vs GPT-5: An Honest Comparison', category: 'AI Tools', readTime: '7 min', date: 'Apr 10' },
    { title: 'Perplexity for Research: A Practical Guide', category: 'AI Tools', readTime: '5 min', date: 'Apr 3' },
  ],
  'Analytics': [
    { title: 'Analytics Without a Data Science Degree', category: 'Analytics', readTime: '7 min', date: 'Apr 15' },
    { title: 'Building a Dashboard in 30 Minutes with AI', category: 'Analytics', readTime: '9 min', date: 'Apr 1' },
    { title: 'Which Metrics Actually Matter for Your Business', category: 'Analytics', readTime: '5 min', date: 'Mar 25' },
  ],
  'Career Growth': [
    { title: 'Career Moves That Make Sense in an AI-First World', category: 'Career Growth', readTime: '5 min', date: 'Apr 8' },
    { title: 'How to Add AI Skills to Your Resume Honestly', category: 'Career Growth', readTime: '4 min', date: 'Mar 30' },
    { title: 'The Roles That Will Survive the Automation Wave', category: 'Career Growth', readTime: '6 min', date: 'Mar 18' },
  ],
  'Productivity': [
    { title: 'Build a Personal Productivity OS with AI', category: 'Productivity', readTime: '10 min', date: 'Apr 1' },
    { title: 'Second Brain Setup: Obsidian + AI in 2026', category: 'Productivity', readTime: '8 min', date: 'Mar 22' },
    { title: 'The Weekly Review System That Actually Sticks', category: 'Productivity', readTime: '5 min', date: 'Mar 12' },
  ],
  'Tutorials': [
    { title: 'How to Read an AI Research Paper (Without Going Insane)', category: 'Tutorials', readTime: '4 min', date: 'Mar 25' },
    { title: 'Fine-Tuning a Model on Your Own Data: Beginner Guide', category: 'Tutorials', readTime: '12 min', date: 'Mar 15' },
    { title: 'Building Your First RAG Pipeline in an Afternoon', category: 'Tutorials', readTime: '9 min', date: 'Mar 5' },
  ],
  'Business Analysis': [
    { title: 'How CFOs Are Using AI for Forecasting in 2026', category: 'Business Analysis', readTime: '6 min', date: 'Mar 20' },
    { title: 'Competitive Intelligence with AI: A Practical Playbook', category: 'Business Analysis', readTime: '7 min', date: 'Mar 10' },
    { title: 'AI-Powered SWOT Analysis: Beyond the Framework', category: 'Business Analysis', readTime: '5 min', date: 'Mar 1' },
  ],
};

export default function CategoriesSection() {
  const [active, setActive] = useState('AI Automation');
  const activeArticles = recentByCat[active] || [];

  return (
    <section id="categories" className="py-12 pb-24 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 border-b-4 border-foreground pb-6">
          <div>
            <span className="section-label block mb-3">Content Library</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-none">
              Browse By<br />Topic.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            120+ articles across 7 categories — all written to be actionable within 24 hours.
          </p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="scroll-x-smooth pb-2 mb-8 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-2 w-max md:w-auto md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActive(cat.label)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap text-xs font-bold uppercase tracking-wider ${
                  active === cat.label
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                <Icon
                  name={cat.icon as Parameters<typeof Icon>[0]['name']}
                  size={14}
                  variant={active === cat.label ? 'solid' : 'outline'}
                />
                {cat.label}
                <span
                  className={`text-[0.55rem] font-mono ml-1 ${
                    active === cat.label ? 'opacity-70' : 'opacity-40'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active category content */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Category description card */}
          <div className="lg:col-span-4">
            <div className="blueprint-cell border border-border rounded-xl space-y-6 h-full">
              <div className="flex items-center gap-3">
                {categories.find((c) => c.label === active) && (
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={categories.find((c) => c.label === active)!.icon as Parameters<typeof Icon>[0]['name']}
                      size={20}
                      className="text-primary"
                      variant="solid"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-black tracking-tight">{active}</h3>
                  <p className="text-xs text-muted-foreground">
                    {categories.find((c) => c.label === active)?.count} articles
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {categories.find((c) => c.label === active)?.description}
              </p>
              <div className="pt-4 border-t border-border">
                <button className="btn-ghost w-full text-center text-xs" style={{ padding: '0.7rem 1rem' }}>
                  View All {active}
                  <Icon name="ArrowRightIcon" size={12} className="inline ml-2" variant="outline" />
                </button>
              </div>
            </div>
          </div>

          {/* Article list */}
          <div className="lg:col-span-8">
            <div className="space-y-1">
              {activeArticles.map((article, i) => (
                <div
                  key={article.title}
                  className="group flex items-center justify-between p-5 border border-border rounded-xl hover:border-primary hover:bg-muted/30 transition-all duration-200 cursor-pointer"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="flex items-start gap-4 flex-grow min-w-0">
                    <span className="mono-label flex-shrink-0 pt-0.5">0{i + 1}</span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug truncate pr-4">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="read-time">{article.readTime} read</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="read-time">{article.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-200 ml-4">
                    <Icon
                      name="ArrowRightIcon"
                      size={12}
                      className="text-muted-foreground group-hover:text-primary-foreground transition-colors"
                      variant="outline"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}