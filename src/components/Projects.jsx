// src/components/Projects.tsx

// Data proyek bisa diletakkan di sini atau diambil dari API
const projectData = [
  {
    title: "Project Website E-commerce",
    description: "Website toko online yang dibangun dengan Next.js dan terhubung ke sistem pembayaran.",
    image: "/project1.png", // Ganti dengan screenshot proyek Anda
    link: "#" // Ganti dengan link ke proyek
  },
  {
    title: "Aplikasi Task Manager",
    description: "Aplikasi untuk mengatur tugas harian dengan fitur drag-and-drop.",
    image: "/project2.png",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                  Lihat Proyek &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;