'use client';
import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Kontak Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Kirim Pesan ✉️</h3>
          <form
            action="https://formspree.io/f/mjkrjgnbp" // GANTI dengan endpoint kamu
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              name="message"
              placeholder="Tulis pesan Anda..."
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all"
            >
              Kirim
            </button>
          </form>
        </motion.div>

        {/* Info & Sosial Media */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Terhubung</h3>
            <p className="text-gray-400 mb-6">
              Terima kasih telah mengunjungi portofolio saya. Silakan hubungi saya melalui form atau sosial media berikut:
            </p>

            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/AryaPutra-182"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arya-putra-91140a331/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://open.spotify.com/user/31ahivddeexh3ulrdzygtvonwbua?si=5ce606d0eef047b4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaSpotify />
              </a>
              <a
                href="mailto:mukhammadaryap@email.com"
                className="hover:text-red-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-10">
            © {new Date().getFullYear()} Arya Putra. Dibuat dengan & Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
