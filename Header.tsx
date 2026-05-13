'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
{ label: 'Articles', href: '#articles' },
{ label: 'Categories', href: '#categories' },
{ label: 'About', href: '#about' }];


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {document.body.style.overflow = '';};
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ?
        'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`
        }>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <AppImage
                src="https://info.mayur.life/_next/image?url=%2Fassets%2Fimages%2Fapp_logo.png&w=64&q=85"
                alt="MayurLife logo mark"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority />
              
            </div>
            <span className="text-foreground font-black text-lg tracking-tight">
              Mayur<span className="text-primary">Life</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks?.map((link) =>
            <a
              key={link?.label}
              href={link?.href}
              className="mono-label hover:text-foreground transition-colors duration-200">
              
                {link?.label}
              </a>
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="version-badge">Weekly Signal</span>
            <a
              href="#newsletter"
              className="btn-primary text-xs py-2.5 px-5"
              style={{ padding: '0.6rem 1.25rem' }}>
              
              Subscribe Free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} variant="outline" />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen &&
      <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col pt-20 px-6">
          <nav className="flex flex-col gap-2">
            {navLinks?.map((link) =>
          <a
            key={link?.label}
            href={link?.href}
            onClick={handleLinkClick}
            className="text-3xl font-black tracking-tight text-foreground py-3 border-b border-border hover:text-primary transition-colors">
            
                {link?.label}
              </a>
          )}
          </nav>
          <div className="mt-10 flex flex-col gap-4">
            <a
            href="#newsletter"
            onClick={handleLinkClick}
            className="btn-primary text-center text-sm">
            
              Subscribe Free
            </a>
            <p className="mono-label text-center">Zero spam — unsubscribe anytime</p>
          </div>
        </div>
      }
    </>);

}