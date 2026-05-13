import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
{ label: 'Articles', href: '#articles' },
{ label: 'Categories', href: '#categories' },
{ label: 'Privacy', href: '#' },
{ label: 'Terms', href: '#' }];


const socialLinks = [
{ label: 'Twitter', icon: 'GlobeAltIcon', href: 'https://twitter.com' },
{ label: 'GitHub', icon: 'CodeBracketIcon', href: 'https://github.com' },
{ label: 'LinkedIn', icon: 'BriefcaseIcon', href: 'https://linkedin.com' }];


export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Links */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md overflow-hidden">
                <AppImage
                  src="https://info.mayur.life/_next/image?url=%2Fassets%2Fimages%2Fapp_logo.png&w=64&q=85"
                  alt="MayurLife logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover" />
                
              </div>
              <span className="text-foreground font-black text-base tracking-tight">
                Mayur<span className="text-primary">Life</span>
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              {footerLinks.map((link) =>
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
                
                  {link.label}
                </a>
              )}
            </nav>
          </div>

          {/* Social + Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((s) =>
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200">
                
                  <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} variant="outline" />
                </a>
              )}
            </div>
            <p className="mono-label">© 2026 MayurLife</p>
          </div>
        </div>
      </div>
    </footer>);

}