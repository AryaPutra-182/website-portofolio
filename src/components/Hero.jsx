'use client';

import Image from 'next/image';
import Link from 'next/link'; // Import Link dari Next.js
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSpotify, FaReact, FaLaravel, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMysql } from 'react-icons/si';

const techStack = [
  { name: 'React', icon: <FaReact />, color: 'hover:text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'hover:text-white' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: 'hover:text-teal-400' },
  { name: 'Laravel', icon: <FaLaravel />, color: 'hover:text-red-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'hover:text-yellow-400' },
  { name: 'Figma', icon: <FaFigma />, color: 'hover:text-purple-400' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gray-950 overflow-hidden px-6 py-20 md:px-16"
    >
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* --- Kolom Kiri: Teks --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="text-teal-400 font-medium tracking-wide mb-2 uppercase text-sm">
            Welcome to my portfolio
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Arya Putra
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 mb-6 h-8">
            <span>I am a </span>
            <span className="text-gray-100 font-semibold">
              <Typewriter
                words={[
                  'Junior Developer.',
                  'React & Laravel Learner.',
                  'Music Lover 🎶.',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>

          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building modern web experiences with a focus on simplicity and functionality. 
            Currently diving deep into the <span className="text-teal-400">Fullstack Ecosystem</span>.
            <br />
            <span className="italic text-sm opacity-60">"I'd like to be under the sea..."</span>
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            {/* --- UPDATE: Menggunakan Link ke /about --- */}
            <Link href="/about" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all"
                >
                  See More
                </motion.a>
            </Link>

            <div className="flex gap-5 text-gray-400">
              <SocialLink href="https://github.com/AryaPutra-182" icon={<FaGithub />} />
              <SocialLink href="https://www.linkedin.com/in/arya-putra-91140a331/" icon={<FaLinkedin />} />
              <SocialLink href="https://spotify.com" icon={<FaSpotify />} />
            </div>
          </div>

          {/* Tech Stack Minimalis */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-500 mb-4 text-center md:text-left">Tech Stack</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-2xl text-gray-600">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`transition-colors duration-300 ${tech.color}`}
                  title={tech.name}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Kolom Kanan: Gambar --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-95" />
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900">
                <Image
                src="/profile1.jpeg"
                alt="Arya Putra"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                />
            </div>
        </motion.div>

      </div>
      
       {/* Scroll Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, y: [0, 10, 0] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
       >
          Scroll Down
       </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-white transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Hero;