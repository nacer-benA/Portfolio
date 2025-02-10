import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div 
        ref={ref}
        className={`text-center text-white px-4 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-cyan-400">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          Full Stack Developer specializing in React, Node.js, and MySQL
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 hover:text-white transition-colors">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:contact@example.com"
             className="text-gray-300 hover:text-white transition-colors">
            <Mail className="h-8 w-8" />
          </a>
        </div>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-cyan-500 text-white rounded-lg
                   hover:bg-cyan-600 transition-colors text-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}