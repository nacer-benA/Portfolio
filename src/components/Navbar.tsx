import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Code className={`h-8 w-8 ${isScrolled ? 'text-cyan-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Portfolio
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#projects" isScrolled={isScrolled}>Projects</NavLink>
            <NavLink href="#skills" isScrolled={isScrolled}>Skills</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <a 
      href={href} 
      className={`${
        isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-gray-200 hover:text-white'
      } transition-colors`}
    >
      {children}
    </a>
  );
}