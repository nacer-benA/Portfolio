import React from 'react';
import { Code2, Database, Server } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            I'm a passionate Full Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless,
            user-friendly experiences that solve real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="inline-block p-4 bg-cyan-50 rounded-full mb-4">
                <Code2 className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">
                Creating responsive and intuitive user interfaces with React and modern CSS
              </p>
            </div>
            
            <div className="p-6">
              <div className="inline-block p-4 bg-cyan-50 rounded-full mb-4">
                <Server className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">
                Building robust APIs and server-side applications with Node.js
              </p>
            </div>
            
            <div className="p-6">
              <div className="inline-block p-4 bg-cyan-50 rounded-full mb-4">
                <Database className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600">
                Designing and optimizing database schemas with MySQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}