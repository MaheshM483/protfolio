import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">MM</span>
          </div>
        </div>
        
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Mahesh M
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
            Software Engineer/Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build web applications and backend services that handle real-world challenges, using cloud, microservices, and Big Data technologies.
            Let's build something amazing together.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up-delay">
          <button 
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
         
         <a 
           href="/MaheshResume.pdf" 
           download="Mahesh_M_Resume.pdf"
           className="bg-gray-800 hover:bg-gray-700 border border-purple-500 hover:border-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
         >
           <Download size={20} />
           Download Resume
         </a>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/MaheshM483" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mahesh-se/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="maheshmuthyala333@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-purple-400 transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;