import React, { useState } from "react";
import { useMenuStyles } from "./Menu.styles";
import { useNavigate, NavLink } from "react-router-dom";
import TG from "./Img/tg.png";

function Menu() {
  const styles = useMenuStyles();
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  const handleTelegramClick = () => {
    window.location.href = 'https://t.me/codingcase';
  };

  return (
    <div className={styles.strippedMenu}>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      {isMenuOpen && (
        <ul className={styles.menuList}>
          <li  className={styles.menuItem} onClick={handleTelegramClick} >
            <img src={TG} alt="Img" className={styles.TgPng}  />
            Channel
          </li>
          <NavLink to={"/aboutus"} style={{ textDecoration: "none" }}>
            <li className={styles.menuItem}>About us</li>
          </NavLink>
          <li className={styles.menuItem}>Portfolio</li>
          <NavLink to={"/contactus"} style={{ textDecoration: "none" }}>
            <li className={styles.menuItem}>Contact us</li>
          </NavLink>
          <li className="language-selection">
            <span
              className={`${styles.menuItem} ${
                language === "RU" ? styles.activeLanguage : ""
              }`}
              onClick={() => changeLanguage("RU")}
            >
              RU
            </span>{" "}
            /{" "}
            <span
              className={`${styles.menuItem} ${
                language === "EN" ? styles.activeLanguage : ""
              }`}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
