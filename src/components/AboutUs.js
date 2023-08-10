import Heder from "./Heder";
import { createUseStyles } from "react-jss";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineTelegram,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai"; // Импортируем иконки из React Icons
import PhUs from "./Img/usc.jpg";
import Port from "./Img/Port.jpg";

function AboutUs() {
  const useStyles = createUseStyles({
    app: {
      backgroundColor: "black",
      minHeight: "265vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    neonBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(45deg, rgb(5, 2, 80), black, rgb(5, 2, 80))",
      backgroundSize: "400% 400%",
      animation: "$neonAnimation 15s ease-in-out infinite",
    },
    img: {
      width: "65%",
      maxWidth: "90vw",
      position: "absolute",
      top: 140,
      left: 250,
      border: "2px solid #007bff",
      borderRadius: "25px",
    },
    "@keyframes neonAnimation": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
    heading: {
      fontSize: "35px",
      marginBottom: "10px",
      color: "white",
    },
    list: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", // Разбиваем на две колонки
      gridGap: "20px", // Отступ между элементами
      listStyleType: "none",
      padding: 0,
      justifyContent: "center", // Располагаем элементы в центре горизонтально
    },
    listItem: {
      marginBottom: "5px",
      display: "flex", // Добавляем flex-контейнер для выравнивания иконки и текста
      alignItems: "center", // Выравниваем элементы по вертикали
    },
    icon: {
      marginRight: "10px", // Отступ между иконкой и текстом
      fontSize: "35px",
      color: "white",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      //   fontWeight: "bold",
      fontFamily: "Luminari, fantasy",
      fontSize: "31px",
    },
    container: {
      marginTop: "20px",
      position: "absolute",
      top: 450,
      left: 100,
    },
    imgP: {
      width: "75%",
      maxWidth: "90vw",
      position: "absolute",
      top: 300,
      left: 120,
      border: "2px solid #007bff",
      borderRadius: "25px",
    },
    btnSee: {
      position: "absolute",
      top: 570,
      left: 780,
      backgroundColor: "royalblue",
      color: "#fff",
      padding: "16px 20px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      width: "20%",
      fontSize: "31px",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  });
  const navigate = useNavigate();
  const styles = useStyles();
  const NavInPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className={styles.neonBackground}>
      <div className={styles.app}>
        <Heder />
      </div>
      <div>
        <img src={PhUs} alt="Img" className={styles.img} />
        <div className={styles.container}>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <AiOutlineMail className={styles.icon} />{" "}
              {/* Используем иконку для Email */}
              <a className={styles.link} href="mailto:codingcasex@gmail.com">
                Email - codingcasex@gmail.com
              </a>
            </li>
            <li className={styles.listItem}>
              <AiOutlineLinkedin className={styles.icon} />{" "}
              {/* Используем иконку для LinkedIn */}
              <a className={styles.link} href="https://www.linkedin.com/">
                LinkedIn - Coding Case In
              </a>
            </li>
            <li className={styles.listItem}>
              <FaTelegram className={styles.icon} />
              <a className={styles.link} href="https://telegram.org/">
                Telegram Coding Case TG
              </a>
            </li>
            <li className={styles.listItem}>
              <AiOutlineWhatsApp className={styles.icon} />{" "}
              {/* Используем иконку для WhatsApp */}
              <a className={styles.link} href="https://www.whatsapp.com/">
                WhatsApp
              </a>
            </li>
            <li className={styles.listItem}>
              <AiOutlinePhone className={styles.icon} />{" "}
              {/* Используем иконку для телефона */}
              <a className={styles.link} href="tel:+1234567890">
                Telephone +374 99 59 55 05
              </a>
            </li>
          </ul>
          <img src={Port} alt="Img" className={styles.imgP} />
          <button onClick={NavInPortfolio} className={styles.btnSee}>
            Go to See
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
