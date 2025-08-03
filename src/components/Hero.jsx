import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => (
  <section className="bg-gray-100 dark:bg-gray-800 py-16 text-center" id="hero">
  {/* <img src="https://avatars.githubusercontent.com/u/60952281?v=4" alt="Saidina Husen" className="mx-auto w-32 h-32 rounded-full shadow-md mb-4 object-cover" /> */}
  <img
    src="/photos/husen-white.jpg"
    alt="Saidina Husen"
    className="mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover object-top"
  />

  <h1 className="text-3xl font-bold">Saidina Husen</h1>
  <p className="text-gray-600 dark:text-gray-300 mt-2">Fullstack Software Developer</p>
    <div className="mt-4 flex justify-center gap-4">
      <a href="https://github.com/husen" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
      <a href="https://linkedin.com/in/saidina-husen" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
    </div>
    <a href="/documents/CV_Saidina_Husen.pdf" download className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Download CV
    </a>
  </section>
);

export default Hero;
