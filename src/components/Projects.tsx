import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ShoppingCart, Calendar, Cloud, Store } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution featuring shopping cart functionality, secure user authentication, and real-time inventory management. Built with React, Node.js, and MySQL.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
    demo: "https://marvelous-torte-399af2.netlify.app",
    tech: ["React", "Node.js", "MySQL", "Express", "JWT"],
    icon: ShoppingCart
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop organization, and team workspace features. Includes email notifications and task analytics.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80",
    demo: "https://task-manager-demo.stackblitz.io",
    tech: ["React", "Node.js", "MySQL", "Socket.io"],
    icon: Calendar
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather application providing real-time weather data, 7-day forecasts, and severe weather alerts. Features include location-based weather and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80",
    demo: "https://weather-app-demo.stackblitz.io",
    tech: ["React", "OpenWeather API", "Chart.js"],
    icon: Cloud
  },
  {
    title: "Artisan Bakery Website",
    description: "A modern, responsive website for an artisan bakery featuring an online menu, order system, and customer testimonials. Includes integration with Instagram feed and newsletter signup.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    demo: "https://bakery-demo.stackblitz.io",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: Store
  }
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Icon className="h-6 w-6 text-cyan-600 mr-2" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}