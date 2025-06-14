import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
// Tüm bireysel logo importlarını kaldırın
// import javascriptLogo from "../assets/js-logo.jpg";
// ... (diğer tüm logo importları)

// Yetenek verilerini yeni veri dosyasından import edin
import skillsData from "../data/skillImages.js"; // Gerekirse yolu ayarlayın

const Skills = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const title = language === "en" ? "Skills" : "Yetenekler";

  return (
    <section
      className={`p-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h2
        className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow transition-all transform hover:scale-105 hover:shadow-xl ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            } cursor-pointer`}
          >
            <img
              src={skill.logo} // skill.logo şimdi import edilen skillsData'dan geliyor
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <p className="text-center font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
