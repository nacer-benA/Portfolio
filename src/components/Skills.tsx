import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "TypeScript", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "Git", level: 85 }
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-cyan-500 rounded-full transition-all duration-1000"
                  style={{ 
                    width: inView ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}