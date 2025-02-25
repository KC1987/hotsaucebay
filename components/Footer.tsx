import React from 'react';
import { Link } from '@heroui/link';

export default function Footer() {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <footer className="py-6 border-t border-gray-400">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          {footerLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="text-gray-500 hover:text-gray-900 text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <p className="text-gray-400 text-xs text-center">
          Made with ❤️ in Riga, Latvia • © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}