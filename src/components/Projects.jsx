const projects = [
  {
    title: "Pelindo Digital-Sign",
    tech: "CodeIgniter 3, .NET, Python, Node.js",
    desc: "A distributed e-signature system with OCR-based PDF coordination and Peruri integration, handling async jobs and real-time callbacks."
  },
  {
    title: "PDF Generation API",
    tech: ".NET Core 8, IronPDF, Hangfire",
    desc: "Web API to generate PDF documents asynchronously with callback on completion."
  },
  {
    title: "E-Office Front-End Redesign",
    tech: "ReactJS, Tailwind CSS",
    desc: "Improved UX/UI for Pelindo's internal system using modern responsive design."
  },
  {
    title: "Pelindo Cooperative System",
    tech: ".NET MVC, SAP, Hangfire",
    desc: "Manages employee loans with salary deduction integration and async processing."
  },
  {
    title: "GYM Management App",
    tech: ".NET Core, ReactJS",
    desc: "Custom date-based scheduling system with booking/cancellation logic."
  },
  {
    title: "Inventory Management System",
    tech: "CodeIgniter 3, Barcode Scanner",
    desc: "Track goods flow in warehouse with real-time barcode support."
  }
];

const Projects = () => (
  <section className="px-8 py-10 bg-gray-50">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="border rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold text-xl">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{project.tech}</p>
          <p className="mt-2">{project.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
