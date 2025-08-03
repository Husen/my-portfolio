import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700" id="contact">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        I'm actively looking for a full-time opportunity as a Software Developer. If you're hiring, feel free to get in touch.
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3">
          <FaEnvelope className="text-blue-600 dark:text-blue-400" />
          <a href="mailto:saidinahusen10.hs@gmail.com" className="text-blue-600 dark:text-blue-400 underline">
            saidinahusen10.hs@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaLinkedin className="text-blue-600 dark:text-blue-400" />
          <a href="https://linkedin.com/in/saidina-husen" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">
            linkedin.com/in/saidina-husen
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaGithub className="text-blue-600 dark:text-blue-400" />
          <a href="https://github.com/husen" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">
            github.com/husen
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
