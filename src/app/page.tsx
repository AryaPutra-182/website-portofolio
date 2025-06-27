// src/app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
// Anda bisa membuat komponen lain seperti About, Contact, Footer dan mengimpornya di sini
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        {/* Tambahkan section id pada komponen agar link di Header berfungsi */}
        <div id="projects"> 
            <Projects />
        </div>
        {/* <div id="about"><About /></div> */}
        {/* <div id="contact"><Contact /></div> */}
      </main>
       <Footer /> {/* ✅ Footer dipanggil di sini */}
    </div>
  );
}