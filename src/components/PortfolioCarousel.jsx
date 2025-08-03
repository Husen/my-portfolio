import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projects = [
  {
    title: "Pelindo Digital-Sign",
    desc: "Distributed signing system using .NET, Flask, Node.js, CI3. Integrated with Peruri.",
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

const PortfolioCard = ({ project }) => (
  <div className="bg-gray-100 dark:bg-gray-700 rounded shadow p-4 hover:shadow-lg transition">
    <img
      src={project.image}
      alt={project.title}
      className="w-full aspect-video object-cover rounded mb-3"
    />
    <h3 className="font-semibold text-gray-900 dark:text-white">{project.title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
  </div>
);

const PortfolioCarousel = () => (
  <section className="px-6 py-12 bg-white dark:bg-gray-800" id="projects">
    <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projects</h2>

    {/* Carousel untuk md ke atas */}
    <div className="hidden md:block">
      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <PortfolioCard project={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Grid fallback untuk mobile */}
    <div className="md:hidden grid grid-cols-1 gap-6">
      {projects.map((p, i) => (
        <PortfolioCard key={i} project={p} />
      ))}
    </div>
  </section>
);

export default PortfolioCarousel;
