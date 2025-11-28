'use client';

import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* --- Ambient Glow (Dekorasi Halus) --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">
        
        {/* --- Kolom Kiri: Form Kontak --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400 mb-8">
            Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan di sini.
          </p>

          <form
            action="https://formspree.io/f/mjkrjgnbp" // Endpoint Formspree Anda
            method="POST"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Nama"
                required
                className="w-full px-5 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-5 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600"
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Tulis pesan Anda..."
              required
              rows={5}
              className="w-full px-5 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-gray-600 resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all"
            >
              <span>Kirim Pesan</span>
              <FaPaperPlane className="text-sm" />
            </motion.button>
          </form>
        </motion.div>

        {/* --- Kolom Kanan: Info & Socials --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Find Me On</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Terima kasih telah mengunjungi portofolio saya. Saya selalu terbuka untuk diskusi mengenai teknologi, musik, atau proyek baru.
            </p>

            <div className="flex gap-6">
              <SocialIcon 
                href="https://github.com/AryaPutra-182" 
                icon={<FaGithub />} 
                color="hover:text-white"
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/arya-putra-91140a331/" 
                icon={<FaLinkedin />} 
                color="hover:text-blue-400"
              />
              <SocialIcon 
                href="https://spotify.com" 
                icon={<FaSpotify />} 
                color="hover:text-green-400"
              />
              <SocialIcon 
                href="mailto:mukhammadaryap@email.com" 
                icon={<FaEnvelope />} 
                color="hover:text-red-400"
              />
            </div>
          </div>
          
          {/* Quote Kecil atau Dekorasi */}
          <div className="hidden md:block mt-10 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
             <p className="text-gray-500 italic text-sm">
               "Coding is like poetry... it should be short and concise."
             </p>
          </div>
        </motion.div>
      </div>

      {/* --- Copyright Section --- */}
      <div className="border-t border-gray-800 mt-16 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} <span className="text-white font-medium">Arya Putra</span>. 
          Dibuat dengan <span className="text-red-500">❤</span> & Next.js
        </p>
      </div>
    </footer>
  );
};

// Komponen Kecil untuk Social Icon
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  color: string;
}

const SocialIcon = ({ href, icon, color }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-2xl text-gray-500 transition-colors duration-300 ${color}`}
  >
    {icon}
  </a>
);

export default Footer;