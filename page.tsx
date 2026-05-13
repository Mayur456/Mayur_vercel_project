import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import FeaturedArticlesSection from '@/app/components/FeaturedArticlesSection';
import CategoriesSection from '@/app/components/CategoriesSection';
import NewsletterSection from '@/app/components/NewsletterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background grid-bg">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturedArticlesSection />
      <CategoriesSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}