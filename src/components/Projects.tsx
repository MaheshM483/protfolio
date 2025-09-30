import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mastercard',
     designation: 'Software Engineer',
      description: 'Worked as a Software Engineer, focusing on building scalable enterprise applications. ' +
      'Designed and implemented backend services and APIs for critical business processes. ' +
      'Collaborated with global teams to deliver high-quality, reliable solutions. ' +
      'Contributed to automation, performance optimization, and system enhancements.',
      image: '/231121115821-mastercard-logo-file copy.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Spring', 'API', 'Kafka', 'GraphQL', 'Tailwind CSS'],
      liveUrl: 'https://www.linkedin.com/company/mastercard/',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'Cognizant',
     designation: 'Software Engineer',
      description:  'Worked as a Software Engineer on large-scale application development projects. ' +
      'Developed and maintained modular services and APIs to support enterprise operations. ' +
      'Collaborated with cross-functional teams on design, development, and deployment. ' +
      'Contributed to process improvements, efficiency, and automation initiatives.',
      image: '/Cognizant-Chennai copy.jpg',
      technologies: ['Next.js', 'TypeScript', 'SQL', 'RESTful APIs', 'Terraform ' , 'Kubernetes', 'Spark'],
      liveUrl: 'https://www.linkedin.com/company/cognizant/',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'Food App',
      description: 'A simple web-based application that demonstrates frontend design and basic interaction for a food delivery platform. It showcases skills in HTML and structuring a user-facing project.',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'CSS3', 'HTML5', 'JavaScript'],
      liveUrl: 'https://github.com/MaheshM483/FoodApp',
      githubUrl: 'https://github.com/MaheshM483/FoodApp',
      featured: false,
    },
    {
      title: 'Software Testing',
      description: 'A Java-based project focused on testing practices. It highlights understanding of testing frameworks and applying automation/testing principles to ensure code reliability.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Java', 'Junit', 'Selenium WebDriver', 'PostgreSQL', 'Maven'],
      liveUrl: 'https://github.com/MaheshM483/Software-Testing',
      githubUrl: 'https://github.com/MaheshM483/Software-Testing',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           A showcase of my professional experience and project work.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                   {project.designation && (
                     <p className="text-lg text-purple-400 font-semibold mb-3">
                       {project.designation}
                     </p>
                   )}
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      LinkedIn
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group/link"
                    >
                      View Project
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;