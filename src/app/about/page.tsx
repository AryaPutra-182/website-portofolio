'use client';

import { FaUser, FaBirthdayCake, FaUniversity, FaMapMarkerAlt, FaQuoteLeft, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Animation Variants ---
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const infoList = [
    { icon: <FaUser />, label: 'Nama', value: 'Arya Putra' },
    { icon: <FaBirthdayCake />, label: 'Umur', value: '21 Tahun' },
    { icon: <FaUniversity />, label: 'Status', value: 'Mahasiswa IT' },
    { icon: <FaMapMarkerAlt />, label: 'Domisili', value: 'Pasuruan, Jatim' },
  ];

  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-300 py-20 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      {/* --- Ambient Background (Sama seperti Hero) --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent opacity-30" />
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-5xl w-full z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        
        {/* --- Header Section --- */}
        <motion.div variants={itemVariant} className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Me</span>
           </h1>
           <p className="text-gray-400 max-w-xl mx-auto">
             Mengenal lebih dekat siapa saya, apa yang saya kerjakan, dan musik yang menemani hari-hari saya.
           </p>
        </motion.div>

        {/* --- Bento Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Bio Section (Lebar 2 Kolom) */}
          <motion.div 
            variants={itemVariant}
            className="md:col-span-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl shadow-xl hover:border-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              👋 Hello There!
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-400">
              <p>
                Saya adalah seorang <span className="text-teal-400 font-medium">Junior Developer</span> yang sedang menempuh studi
                Teknik Informatika di <span className="text-white">Institut Teknologi Nasional Malang</span>.
              </p>
              <p>
                Ketertarikan saya terletak pada dunia <span className="text-blue-400 font-medium">Modern Web Development</span>. 
                Saya menikmati proses mengubah baris kode menjadi antarmuka yang indah dan fungsional menggunakan 
                ekosistem React dan Laravel.
              </p>
            </div>
          </motion.div>

          {/* 2. Quick Info Cards (Grid Kecil) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {infoList.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/40 border border-gray-700/50 p-4 rounded-xl flex items-center gap-4 hover:bg-gray-800/60 transition-colors"
              >
                <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400 text-xl">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</h4>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Quote / Poetry Section (Tinggi) */}
          <motion.div 
            variants={itemVariant}
            className="md:col-span-1 bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center"
          >
            <FaQuoteLeft className="text-4xl text-gray-800 absolute top-6 left-6" />
            <div className="relative z-10 italic text-gray-400 font-light space-y-4">
              <p>"I cradle the night with tear stained eyes, Weeping for storms I never called mine."</p>
              <p>"The world blames me for broken skies. Yet I've only ever tried to shine."</p>
            </div>
          </motion.div>

          {/* 4. Spotify Embed (Lebar 2 Kolom) */}
          <motion.div 
             variants={itemVariant}
             className="md:col-span-2 bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
             <div className="p-4 border-b border-gray-800 bg-gray-900/80 flex justify-between items-center">
                <span className="text-white font-semibold flex items-center gap-2">
                   🎵 My Coding Energy
                </span>
                <span className="text-xs text-green-400 px-2 py-1 bg-green-400/10 rounded-full animate-pulse">
                   Now Playing
                </span>
             </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator" // Ganti dengan URL Embed Playlist Spotify Anda yang asli
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="bg-gray-900"
            ></iframe>
          </motion.div>

        </div>

        {/* --- Back Button --- */}
        <motion.div variants={itemVariant} className="mt-12 text-center">
          <Link href="/" passHref>
             <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 border border-gray-700 hover:border-teal-500">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Beranda</span>
             </button>
          </Link>
          <p className="text-gray-600 text-xs mt-4">
             © {new Date().getFullYear()} Arya Putra
          </p>
        </motion.div>

      </motion.div>
    </main>
  );
}