import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import projectsData from "../dataJSON/projectsData.json";
import projectPhoto from "../assets/pizza.png";
import projectPhoto2 from "../assets/eticaret.png";
import projectPhoto3 from "../assets/hmakine.png";
import projectPhoto4 from "../assets/fastfood.png";
import projectPhoto5 from "../assets/iform.png";
import projectPhoto6 from "../assets/eyoutube.png";
import projectPhoto7 from "../assets/filmdata.png";
import projectPhoto8 from "../assets/friendsdata.png";
import projectPhoto9 from "../assets/userapp.png";
import projectPhoto10 from "../assets/taskdash.png";
import projectPhoto11 from "../assets/journal.png";
import projectPhoto12 from "../assets/notekeeper.png";
import projectPhoto13 from "../assets/cyripto.png";
import projectPhoto14 from "../assets/menuqr.png";
import projectPhoto15 from "../assets/pokedex.png";
import projectPhoto16 from "../assets/filmarchive.png";
import projectPhoto17 from "../assets/bookstore.png";
import projectPhoto18 from "../assets/e-netflix.png";
import projectPhoto19 from "../assets/e-twitter.png";
import projectPhoto20 from "../assets/music.png";
import projectPhoto21 from "../assets/gridgame.png";
import projectPhoto22 from "../assets/jbl.png";
import projectPhoto23 from "../assets/starbucks.png";
import projectPhoto24 from "../assets/costy.png";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme(); // Dark mode durumunu alıyoruz

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section
      className={`py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <h4
        className={`text-4xl font-semibold text-center ${
          darkMode ? "text-blue-300" : "text-blue-700"
        } mb-10`}
      >
        {language === "en" ? "Projects" : "Projeler"}
      </h4>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => {
            let projectImage;
            if (project.id === 1) {
              projectImage = projectPhoto;
            } else if (project.id === 2) {
              projectImage = projectPhoto2;
            } else if (project.id === 3) {
              projectImage = projectPhoto3;
            } else if (project.id === 4) {
              projectImage = projectPhoto4;
            } else if (project.id === 5) {
              projectImage = projectPhoto5;
            } else if (project.id === 6) {
              projectImage = projectPhoto6;
            } else if (project.id === 7) {
              projectImage = projectPhoto7;
            } else if (project.id === 8) {
              projectImage = projectPhoto8;
            } else if (project.id === 9) {
              projectImage = projectPhoto9;
            } else if (project.id === 10) {
              projectImage = projectPhoto10;
            } else if (project.id === 11) {
              projectImage = projectPhoto11;
            } else if (project.id === 12) {
              projectImage = projectPhoto12;
            } else if (project.id === 13) {
              projectImage = projectPhoto13;
            } else if (project.id === 14) {
              projectImage = projectPhoto14;
            } else if (project.id === 15) {
              projectImage = projectPhoto15;
            } else if (project.id === 16) {
              projectImage = projectPhoto16;
            } else if (project.id === 17) {
              projectImage = projectPhoto17;
            } else if (project.id === 18) {
              projectImage = projectPhoto18;
            } else if (project.id === 19) {
              projectImage = projectPhoto19;
            } else if (project.id === 20) {
              projectImage = projectPhoto20;
            } else if (project.id === 21) {
              projectImage = projectPhoto21;
            } else if (project.id === 22) {
              projectImage = projectPhoto22;
            } else if (project.id === 23) {
              projectImage = projectPhoto23;
            } else if (project.id === 24) {
              projectImage = projectPhoto24;
            }

            return (
              <div
                key={project.id}
                className={` from-blue-100 to-blue-300 shadow-lg rounded-lg w-[350px] overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  darkMode ? "bg-gray-800" : ""
                }`}
              >
                <div className="relative h-64">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={projectImage}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div
                  className={`p-6 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  } rounded-b-lg`}
                >
                  <h5
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-blue-800"
                    }`}
                  >
                    {language === "en"
                      ? project["title-en"]
                      : project["title-tr"]}
                  </h5>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } mt-2`}
                  >
                    {language === "en"
                      ? project["description-en"]
                      : project["description-tr"]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs hover:bg-blue-700 hover:cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <a
                      className={`text-blue-700 font-semibold hover:underline ${
                        darkMode ? "text-white" : ""
                      }`}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "en" ? "GitHub" : "GitHub"} &rarr;
                    </a>
                    <a
                      className={`text-blue-700 font-semibold hover:underline ${
                        darkMode ? "text-white" : ""
                      }`}
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "en" ? "App" : "Uygulama"} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
