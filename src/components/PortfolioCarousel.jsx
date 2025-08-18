import { useState } from "react";

const projects = [
  {
    title: "Journey To Cloud",
    desc: "End-to-end migration of on-prem applications, Oracle databases, and file storage to cloud-native infrastructure with PostgreSQL/GaussDB and integrated observability.",
    image: "/images/journey_to_cloud.png"
  },
  {
    title: "Monitoring Registration Pelindo Digital-Sign",
    desc: "Using .NET Core",
    image: "/images/monitoring_esign.png"
  },
  {
    title: "Pelindo Digital-Sign",
    desc: "Distributed signing system using .NET Core, Flask, Node.js, CI3. Integrated with Peruri.",
    image: "/images/e-sign.png"
  },
  {
    title: "E-Office Redesign",
    desc: "ReactJS + Tailwind redesign with better UX.",
    image: "/images/peo.png"
  },
  {
    title: "PDF Generation API",
    desc: "PDF generator with IronPDF and Hangfire.",
    image: "/images/GeneratedPdf.png"
  },
  {
    title: "API MDM Pelindo",
    desc: ".NET Core 8",
    image: "/images/mdm.png"
  },
  {
    title: "Cooperative System",
    desc: "Loan management with SAP integration.",
    image: "/images/koperasi.png"
  },
  {
    title: "Pelindo Gym",
    desc: "Management and booking session",
    image: "/images/p-gym.png"
  }
];

const PortfolioCard = ({ project, onClick }) => (
  <div
    className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden w-full max-w-sm m-4 cursor-pointer"
    onClick={() => onClick(project)}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full aspect-video object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {project.desc}
      </p>
    </div>
  </div>
);

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="px-6 py-12 bg-gray-50 dark:bg-gray-900"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </h2>

      {/* Grid of cards */}
      <div className="flex flex-wrap justify-center">
        {projects.map((p, i) => (
          <PortfolioCard key={i} project={p} onClick={setSelectedProject} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full p-6"
            onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak close
          >
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {selectedProject.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGrid;
