'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';

// Data Proyek diperkaya dengan 'tags' dan status
const projectData = [
  {
    title: "Sport Gear",
    description: "Platform penyewaan alat olahraga dengan fitur booking online dan manajemen inventaris.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    image: "/project1.png", 
    link: "https://sport-gear-37fj.vercel.app",
    isAvailable: true,
  },
  {
    title: "Upcoming Project",
    description: "Sistem manajemen data sedang dalam tahap pengembangan.",
    tags: ["Laravel", "MySQL", "React"],
    image: "/project2.png", // Pastikan ada gambar placeholder atau gunakan warna solid jika tidak ada gambar
    link: "#",
    isAvailable: false, // Menandakan project belum siap
  },
];

// --- Animasi Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-gray-950 text-white overflow-hidden">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Beberapa hasil project yang telah saya kerjakan
          </p>
        </motion.div>

        {/* Grid Projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

// --- Komponen Card Terpisah agar Rapi ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-colors duration-300 flex flex-col h-full"
    >
      {/* 1. Image Area */}
      <div className="relative h-56 w-full overflow-hidden">
        {project.isAvailable ? (
            <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
        ) : (
            // Tampilan jika project belum tersedia (Coming Soon)
            <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-30 grayscale blur-sm"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute z-10 flex flex-col items-center text-gray-400">
                    <FaLock className="text-3xl mb-2" />
                    <span className="font-semibold uppercase tracking-wider text-sm">Coming Soon</span>
                </div>
            </div>
        )}

        {/* Overlay Gradient saat Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
            {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-800 text-teal-300 border border-gray-700">
                    {tag}
                </span>
            ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
            {project.isAvailable ? (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-teal-400 transition-colors group/link"
                >
                    Lihat Live Demo 
                    <FaExternalLinkAlt className="text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
            ) : (
                <span className="text-gray-600 cursor-not-allowed flex items-center gap-2 text-sm">
                    <FaLock className="text-xs" /> Masih dalam pengembangan
                </span>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;