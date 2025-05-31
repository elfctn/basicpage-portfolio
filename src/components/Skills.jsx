import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import javascriptLogo from "../assets/js-logo.jpg";
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import nodeLogo from "../assets/nodejs-logo.jpg";
import vscodeLogo from "../assets/vscode-logo.png";
import figmaLogo from "../assets/figma.png";
import javaLogo from "../assets/java.png";
import springbootLogo from "../assets/springboot.png";
import postgreLogo from "../assets/sql.png";
import intellijLogo from "../assets/intellij.png";
import pycharmLogo from "../assets/pycharm.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import scssLogo from "../assets/scss.png";
import bootstrapLogo from "../assets/bootstrap.svg";
import styledLogo from "../assets/styled.webp";
import tailwindLogo from "../assets/tailwind.svg";
import sqlLogo from "../assets/sql.png";
import muiLogo from "../assets/mui.png";
import pythonLogo from "../assets/python.png";
import sdjpaLogo from "../assets/sdjpa.webp";
import springsecLogo from "../assets/springsec.png";
import hibernateLogo from "../assets/hibernate.png";
import jpytrLogo from "../assets/jpytr.png";
import gitLogo from "../assets/git.jpg";
import githubLogo from "../assets/github.webp";
import gitlabLogo from "../assets/gitlab.svg";
import jiraLogo from "../assets/jira.webp";
import postmanLogo from "../assets/postman.png";
import viteLogo from "../assets/vite.png";
import rqueryLogo from "../assets/rquery.png";
import cursorLogo from "../assets/cursor.jpeg";
import geminiLogo from "../assets/gemini.png";
import openaiLogo from "../assets/openai.png";
import cypressLogo from "../assets/cypress.jpg";

const skillsData = [
  { logo: htmlLogo, name: "HTML" },
  { logo: cssLogo, name: "CSS" },
  { logo: scssLogo, name: "SCSS" },
  { logo: bootstrapLogo, name: "Bootstrap" },
  { logo: styledLogo, name: "Styled-Components" },
  { logo: tailwindLogo, name: "TailwindCSS" },
  { logo: muiLogo, name: "Material UI" },
  { logo: javascriptLogo, name: "JavaScript" },
  { logo: reactLogo, name: "React" },
  { logo: reduxLogo, name: "Redux" },
  { logo: rqueryLogo, name: "TanStack Query" },
  { logo: viteLogo, name: "Vite" },
  { logo: cypressLogo, name: "Cypress" },

  { logo: nodeLogo, name: "Node.js" },
  { logo: javaLogo, name: "Java" },
  { logo: sqlLogo, name: "SQL" },
  { logo: pythonLogo, name: "Python" },

  { logo: springbootLogo, name: "Spring Boot" },
  { logo: sdjpaLogo, name: "SpringData JPA" },
  { logo: springsecLogo, name: "Spring Security" },
  { logo: postgreLogo, name: "PostgreSQL" },
  { logo: hibernateLogo, name: "Hibernate" },

  { logo: vscodeLogo, name: "vsCode" },
  { logo: intellijLogo, name: "Intellij" },
  { logo: pycharmLogo, name: "Pycharm" },
  { logo: jpytrLogo, name: "Jupyter Notebook" },

  { logo: figmaLogo, name: "Figma" },
  { logo: githubLogo, name: "GitHub" },
  { logo: gitlabLogo, name: "GitLab" },
  { logo: gitLogo, name: "Git" },
  { logo: jiraLogo, name: "Atlassian Jira" },
  { logo: postmanLogo, name: "Postman" },
  { logo: cursorLogo, name: "Cursor" },
  { logo: geminiLogo, name: "Gemini" },
  { logo: openaiLogo, name: "OpenAI" },
];

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
            } cursor-pointer`} // cursor pointer eklendi
          >
            <img
              src={skill.logo}
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
