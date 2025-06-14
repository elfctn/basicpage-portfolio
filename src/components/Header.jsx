// styled import'u sadece ProfilePicture için gerekli, diğerleri kaldırıldı
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import profilePic from "../assets/elf-linkedn.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import cvLogo from "../assets/cv-logo.png";
import CustomSwitch from "./CustomSwitch";
import mailLogo from "../assets/mail.png";

// Tüm Styled Components tanımları kaldırıldı (ProfilePicture hariç)
// const HeaderContainer = styled.div` ... `
// const HeaderContent = styled.header` ... `
// const Title = styled.h1` ... `
// const Subtitle = styled.p` ... `
// const SocialIcons = styled.div` ... `
// const SwitchText = styled.span` ... `

const ProfilePicture = styled.div`
  background-color: #ec4899;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 4rem;
  right: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    position: relative;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
  }
`;

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleSwitchChange = () => {
    toggleDarkMode();
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`h-auto flex justify-center items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header className="w-full p-4 md:p-10">
        <div className="flex justify-end items-center mb-4 space-x-4 mr-20">
          <div className="flex items-center space-x-2">
            <CustomSwitch
              isChecked={isChecked}
              handleSwitchChange={handleSwitchChange}
            />
            <span
              className={`text-sm cursor-pointer ${
                darkMode ? "text-white" : "text-black"
              } md:text-base`}
            >
              {darkMode
                ? language === "tr"
                  ? "Aydınlık Mod"
                  : "Light Mode"
                : language === "tr"
                ? "Karanlık Mod"
                : "Dark Mode"}
            </span>
          </div>

          <span
            className={`text-sm cursor-pointer ${
              darkMode ? "text-white" : "text-black"
            } md:text-base`}
            onClick={toggleLanguage}
          >
            {language === "en" ? (
              <>
                <span>Switch to </span>
                <span className="text-pink-500">Turkish</span>
              </>
            ) : (
              <>
                <span className="text-pink-500">İngilizce</span>
                <span>'ye geç </span>
              </>
            )}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h1 className="text-3xl font-normal ml-10 mb-4 md:text-6xl">
              {language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
            </h1>
            <p className="text-2xl font-semibold ml-10 mt-4 mb-10 md:text-4xl">
              {language === "tr"
                ? "Ben yazılım geliştiriciyim. Sağlam ve ölçeklenebilir ürünler geliştirebilirim."
                : "I'm a Software Developer. I can craft solid and scalable products. "}
            </p>
          </div>

          <ProfilePicture>
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
            />
          </ProfilePicture>
        </div>

        <div className="flex justify-start gap-6 mt-8 p-4 ml-7">
          <a
            href="https://linkedin.com/in/elifcetin-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`w-9 h-9 rounded-full object-contain ${
                darkMode ? "brightness-0 invert" : ""
              } transition-opacity duration-300 hover:opacity-70 hover:scale-110`}
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/elfctn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`w-9 h-9 rounded-full object-contain ${
                darkMode ? "brightness-0 invert" : ""
              } transition-opacity duration-300 hover:opacity-70 hover:scale-110`}
              src={githubLogo}
              alt="GitHub"
            />
          </a>

          <a
            href="https://drive.google.com/file/d/15wCfG8BMfGDNdY3GEL5Eyxs63BNI-CZM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cvLogo}
              alt="CV Icon"
              className={`w-12 h-12 -mt-1.5 rounded-full object-contain
                         transition-opacity duration-300 hover:opacity-70 hover:scale-110`} // Inline stiller tamamen Tailwind'e dönüştürüldü ve hover eklendi
            />
          </a>

          <a
            href="mailto:elifcetin.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mailLogo}
              alt="Email Icon"
              className={`w-10 h-10 -mt-0.5 rounded-full object-contain
                filter drop-shadow-none invert hue-rotate-180 saturate-0 brightness-100%
                transition-opacity duration-300 hover:opacity-70 hover:scale-110`} // Inline stiller tamamen Tailwind'e dönüştürüldü ve hover eklendi
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
