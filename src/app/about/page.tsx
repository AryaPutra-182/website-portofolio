'use client';
import { FaUser, FaBirthdayCake, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const infoList = [
    {
      icon: <FaUser />,
      label: 'Nama Lengkap',
      value: 'Arya Putra',
      animation: slideLeft,
    },
    {
      icon: <FaBirthdayCake />,
      label: 'Umur',
      value: '21 Tahun',
      animation: slideRight,
    },
    {
      icon: <FaUniversity />,
      label: 'Status',
      value: 'Mahasiswa',
      animation: slideLeft,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Tempat Tinggal',
      value: 'Pasuruan, Jawa Timur',
      animation: slideRight,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Judul */}
        <motion.h1
          className="text-5xl font-extrabold mb-6 text-teal-400"
          variants={fadeDown}
        >
          Tentang Saya
        </motion.h1>

        {/* Informasi Diri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {infoList.map((info, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-teal-500 flex items-center gap-4"
              variants={info.animation}
            >
              <div className="text-teal-400 text-3xl">{info.icon}</div>
              <div className="text-left">
                <h3 className="text-sm text-teal-400 uppercase tracking-widest">
                  {info.label}
                </h3>
                <p className="text-xl font-semibold text-white">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deskripsi */}
        <motion.div
          className="text-gray-300 text-lg leading-relaxed mb-12 space-y-4"
          variants={fadeUp}
        >
          <p>
            Saya adalah seorang <span className="text-teal-400 font-semibold">junior developer</span> yang sedang menempuh studi
            di bidang Teknik Informatika di Institut Teknologi Nasional Malang. Saya sangat menyukai dunia <span className="text-blue-400 font-semibold">pengembangan web modern</span>,
            terutama dengan menggunakan React, Laravel, dan teknologi open-source.
          </p>
          <p>
            I cradle the night with tear stained eyes, Weeping for storms I never called mine. The world blames me for broken skies.
          </p>
          <p>
            Yet I've only ever tried to shine. Each sorrow not of my own making, Still findsm its way into my chest.
          </p>
        </motion.div>

        {/* Playlist Spotify */}
<motion.div className="mb-12" variants={fadeUp}>
  <h2 className="text-2xl font-semibold text-white mb-4">
    My Energy 🎧
  </h2>
  <div className="rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://open.spotify.com/embed/playlist/13Pkl3IsO5kxFj5vH8uQ7r?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</motion.div>
        <motion.p className="text-gray-500 text-sm" variants={fadeUp}>
          Terima kasih sudah mampir ke halaman ini 👋
        </motion.p>
      </motion.div>
      {/* Tombol Kembali ke Beranda */}
<motion.div variants={fadeUp}>
  <a
    href="/"
    className="inline-block mt-6 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold shadow-md transition-all duration-300"
  >
    ⬅️ Kembali ke Beranda
  </a>
</motion.div>
    </main>

    
  );
}
