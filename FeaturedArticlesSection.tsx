'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

// BENTO GRID AUDIT:
// Array has 6 cards: [GPT-5 Automation, AI Tools Roundup, Analytics Deep Dive, Career Growth, Productivity OS, Tutorials Intro]
// Row 1: [col-1-2: GPT-5 (cs-2 rs-2)] [col-3: AI Tools (cs-1 rs-1)]
// Row 2: [col-1-2: (occupied)] [col-3: Analytics (cs-1 rs-1)]
// Row 3: [col-1: Career Growth (cs-1)] [col-2: Productivity (cs-1)] [col-3: Tutorials (cs-1)]
// Placed 6/6 cards ✓

const articles: Article[] = [
{
  id: 1,
  title: 'GPT-5 Automation: 7 Workflows That Actually Save Hours',
  excerpt:
  'The real-world playbook for building AI pipelines that run while you sleep. No prompt engineering PhD required.',
  category: 'AI Automation',
  readTime: '8 min',
  date: 'Apr 28, 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a8ef969-1775590701261.png",
  imageAlt: 'Glowing neural network nodes in dark space with amber light trails, deep atmospheric shadows',
  featured: true
},
{
  id: 2,
  title: 'The 12 AI Tools Professionals Are Actually Using in 2026',
  excerpt: 'Not hype — real tools with real adoption rates from our reader survey.',
  category: 'AI Tools',
  readTime: '6 min',
  date: 'Apr 22, 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b602e4b9-1772153098250.png",
  imageAlt: 'Dark interface with multiple glowing tool panels and amber accent highlights, low-key studio lighting'
},
{
  id: 3,
  title: 'Analytics Without a Data Science Degree',
  excerpt: 'How to read your own business data using AI co-pilots — zero SQL required.',
  category: 'Analytics',
  readTime: '7 min',
  date: 'Apr 15, 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_170dedbe2-1776886224384.png",
  imageAlt: 'Dark analytics dashboard with glowing amber data visualization charts, dim atmospheric background'
},
{
  id: 4,
  title: 'Career Moves That Make Sense in an AI-First World',
  excerpt: 'Which skills are future-proof? A clear-eyed look at the next 3 years.',
  category: 'Career Growth',
  readTime: '5 min',
  date: 'Apr 8, 2026',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0a9d673-1775460474459.png",
  imageAlt: 'Dark moody office environment with professionals in shadow, dramatic low-key lighting'
},
{
  id: 5,
  title: 'Build a Personal Productivity OS with AI in One Weekend',
  excerpt: 'A step-by-step system that adapts to your work style — not the other way around.',
  category: 'Productivity',
  readTime: '10 min',
  date: 'Apr 1, 2026',
  image: "https://images.unsplash.com/photo-1634493264183-d9750e500c44",
  imageAlt: 'Dark workspace with glowing screen and minimal desk setup, dramatic shadowed environment'
},
{
  id: 6,
  title: 'How to Read an AI Research Paper (Without Going Insane)',
  excerpt: 'A practical framework for extracting what matters from dense academic papers.',
  category: 'Tutorials',
  readTime: '4 min',
  date: 'Mar 25, 2026',
  image: "https://images.unsplash.com/photo-1731200302370-539d4b459fe4",
  imageAlt: 'Dark study with papers and dim lamp light, shadowed bookshelf background, low-key academic atmosphere'
}];


function ArticleCard({ article, className = '' }: {article: Article;className?: string;}) {
  return (
    <div className={`card-article group cursor-pointer h-full flex flex-col ${className}`}>
      {article.featured ?
      <>
          {/* Featured: image top, content bottom */}
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: '280px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="article-category-pill article-category-pill-active">
                {article.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="version-badge text-[0.55rem]">Featured</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow justify-between">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <span className="read-time">{article.readTime} read</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="read-time">{article.date}</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-200">
                <Icon
                name="ArrowRightIcon"
                size={14}
                className="text-muted-foreground group-hover:text-primary-foreground transition-colors"
                variant="outline" />
              
              </div>
            </div>
          </div>
        </> : (

      /* Non-featured: compact horizontal-ish layout */
      <div className="flex flex-col h-full">
          <div className="relative overflow-hidden flex-shrink-0" style={{ height: '160px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="article-category-pill text-[0.55rem]">{article.category}</span>
            </div>
          </div>
          <div className="p-5 flex flex-col flex-grow justify-between">
            <div className="space-y-2">
              <h3 className="text-base font-black tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border">
              <span className="read-time">{article.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="read-time">{article.date}</span>
            </div>
          </div>
        </div>)
      }
    </div>);

}

export default function FeaturedArticlesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.reveal-card');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="articles" className="py-12 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b-4 border-foreground pb-6">
          <div>
            <span className="section-label block mb-3">Selected Reading</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-none">
              What's Worth<br />Your Time.
            </h2>
          </div>
          <a
            href="#categories"
            className="btn-ghost self-start md:self-auto"
            style={{ padding: '0.75rem 1.75rem' }}>
            
            All Articles
            <Icon name="ArrowRightIcon" size={14} className="inline ml-2" variant="outline" />
          </a>
        </div>

        {/* Bento grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          
          {/* Card 1: Featured — col-span-2, row-span-2 */}
          {/* BENTO col-1-2, rs-2 */}
          <div className="reveal-card reveal-hidden md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 xl:col-span-2 xl:row-span-2">
            <ArticleCard article={articles[0]} className="h-full" />
          </div>

          {/* Card 2: AI Tools — col-3 */}
          {/* BENTO col-3, rs-1 */}
          <div className="reveal-card reveal-hidden" style={{ transitionDelay: '80ms' }}>
            <ArticleCard article={articles[1]} className="h-full" />
          </div>

          {/* Card 3: Analytics — col-3 */}
          {/* BENTO col-3, rs-1 */}
          <div className="reveal-card reveal-hidden" style={{ transitionDelay: '160ms' }}>
            <ArticleCard article={articles[2]} className="h-full" />
          </div>

          {/* Card 4: Career Growth */}
          {/* BENTO col-1, row-3 */}
          <div className="reveal-card reveal-hidden" style={{ transitionDelay: '240ms' }}>
            <ArticleCard article={articles[3]} className="h-full" />
          </div>

          {/* Card 5: Productivity */}
          {/* BENTO col-2, row-3 */}
          <div className="reveal-card reveal-hidden" style={{ transitionDelay: '320ms' }}>
            <ArticleCard article={articles[4]} className="h-full" />
          </div>

          {/* Card 6: Tutorials */}
          {/* BENTO col-3, row-3 */}
          <div className="reveal-card reveal-hidden" style={{ transitionDelay: '400ms' }}>
            <ArticleCard article={articles[5]} className="h-full" />
          </div>
        </div>
      </div>
    </section>);

}