// Bu dosya tüm yetenek logosu importlarını içerecek ve bunları isimleriyle/ID'leriyle eşleştirecek.

// Tüm yetenek logolarını import ediyoruz
import javascriptLogo from "../assets/js-logo.jpg";
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import nodeLogo from "../assets/nodejs-logo.jpg";
import vscodeLogo from "../assets/vscode-logo.png";
import figmaLogo from "../assets/figma.png";
import javaLogo from "../assets/java.png";
import springbootLogo from "../assets/springboot.png";
import postgreLogo from "../assets/sql.png"; // Not: sql.png hem Postgre hem de genel SQL için kullanılıyor
import intellijLogo from "../assets/intellij.png";
import pycharmLogo from "../assets/pycharm.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import scssLogo from "../assets/scss.png";
import bootstrapLogo from "../assets/bootstrap.svg";
import styledLogo from "../assets/styled.webp";
import tailwindLogo from "../assets/tailwind.svg";
// import sqlLogo from "../assets/sql.png"; // postgreLogo olarak zaten import edildi, tekrarını önle
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

// Yeni logoları import ediyoruz (jpeg uzantılı)
import mongodbLogo from "../assets/mongodb.jpeg";
import expressjsLogo from "../assets/expressjs.jpeg";
import nextjsLogo from "../assets/nextjs.jpeg";
import typescriptLogo from "../assets/typescript.jpeg";

// Import edilen logolarla yetenek veri dizisini tanımlayın
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
  { logo: mongodbLogo, name: "MongoDB" },
  { logo: expressjsLogo, name: "Express.js" },
  { logo: nextjsLogo, name: "Next.js" },
  { logo: typescriptLogo, name: "TypeScript" },
  { logo: javaLogo, name: "Java" },
  { logo: postgreLogo, name: "SQL" }, // Genel SQL için postgreLogo kullanılıyor
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

export default skillsData;
