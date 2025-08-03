const skills = {
  Languages: ["C#", "Java", "PHP", "JavaScript"],
  Frameworks: [".NET Core", "Spring Boot", "Laravel", "CodeIgniter", "ReactJS"],
  Databases: ["Oracle", "PostgreSQL", "MySQL"],
  Tools: ["Git", "Docker", "Hangfire", "IronPDF", "JMeter"],
  Others: ["RESTful APIs", "Async Jobs", "UI/UX Improvements"]
};

const Skills = () => (
  <section className="px-6 py-12 bg-gray-50 dark:bg-gray-900" id="skills">
    <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Skills</h2>
    <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
      {Object.entries(skills).map(([title, items]) => (
        <div key={title}>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 rounded-full text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Skills;
