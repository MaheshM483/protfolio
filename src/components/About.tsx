import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
   { name: 'Frontend Development (React, Angular, Vue.js)', level: 90, color: 'from-purple-400 to-purple-600' },
  { name: 'Backend Development (Java, Python, Node.js)', level: 85, color: 'from-blue-400 to-blue-600' },
  { name: 'Database Management (SQL, NoSQL)', level: 80, color: 'from-pink-400 to-pink-600' },
  { name: 'Cloud Platforms (AWS, Azure, Kubernetes)', level: 75, color: 'from-green-400 to-green-600' },
  { name: 'DevOps & CI/CD', level: 70, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Version Control (Git)', level: 95, color: 'from-indigo-400 to-indigo-600' },
  { name: 'API Development (REST, GraphQL)', level: 80, color: 'from-teal-400 to-teal-600' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and modern standards.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful, intuitive interfaces that provide exceptional user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and smooth user interactions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating ideas clearly across disciplines.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I’m Mahesh, a software engineer and full-stack developer with 4+ years of experience building scalable, high-performance applications. My work spans Java, Spring Boot, microservices, and cloud-native development, with hands-on experience in Python, Node.js, and React.
              </p>
              <p>
               I enjoy designing REST APIs, building distributed systems, and optimizing data pipelines and ETL workflows. Over time, I’ve developed a strong background in Big Data technologies like Hadoop, Spark, Hive, and Pig, and in event-driven architectures using Kafka and RabbitMQ.
              </p>
              <p>
              I take pride in creating solutions that not only work reliably under heavy loads but also simplify complex problems for users. Whether it’s deploying microservices on Kubernetes, building serverless applications with AWS Lambda, or improving system performance, I focus on writing clean, maintainable, and well-tested code.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;