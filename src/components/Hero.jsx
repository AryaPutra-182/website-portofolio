'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';
import {
  FaReact,
  FaLaravel,
  FaCss3Alt,
  FaDatabase,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMysql } from 'react-icons/si';
const techStack = [  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-yellow-400" /> },];

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'pagi';
    if (hour < 18) return 'sore';
    return 'malam';
  };

  return (
   <section
  id="hero"
  className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white text-center px-6 py-16 md:px-16"
>

      {/* Background SVG wave */}
      <svg
        className="absolute bottom-0 w-full opacity-10 pointer-events-none -z-10"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00dfc4"
          d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,117.3C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192V320H0Z"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Foto Profil Anda"
          width={200}
          height={200}
          className="rounded-full mb-6 md:mb-0 md:mr-10 border-4 border-teal-400 shadow-lg shadow-teal-500/30"
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
     <h1 className="text-5xl font-extrabold mb-4 text-gray-100">
  Halo, Saya Arya Putra!
</h1>



        <p className="text-lg text-gray-300 mb-2">
          Hello There.....
        </p>

        <p className="text-xl text-gray-300 mb-6">
          <span className="text-teal-400">I'am </span>
          <span className="text-white font-semibold">
            <Typewriter
              words={[
                'Junior Developer',
                'Web Enthusiast',
                'React & Laravel Learner',
                'Lifelong Learner 💡',
                'Music Lover 🎶',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        <p className="text-lg text-gray-400 mb-6">
          I'd <span className="text-teal-400 font-semibold">like</span> to be{' '}
          <span className="text-blue-400 font-semibold">under</span> the sea{' '}
        </p>

        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold shadow-md transition-all duration-300 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Lihat Portofolio
        </motion.a>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
  {techStack.map((tech, index) => (
    <div
      key={index}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-black transition"
    >
      <span className="text-xl">{tech.icon}</span>
      <span className="text-white text-sm font-medium">{tech.name}</span>
    </div>
  ))}
</div>


        {/* Ikon Sosial */}
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="https://github.com/AryaPutra-182"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-300 hover:text-white transition-colors text-2xl"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arya-putra-91140a331/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-blue-400 hover:text-white transition-colors text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://open.spotify.com/user/31ahivddeexh3ulrdzygtvonwbua?si=5ce606d0eef047b4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-green-400 hover:text-white transition-colors text-2xl"
          >
            <FaSpotify />
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 text-gray-400 text-sm animate-bounce">
          Scroll untuk melihat lebih banyak ↓
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
