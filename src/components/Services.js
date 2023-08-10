import { useServicesStyles } from "./Services.styles";
import React, { useState } from "react";
import Heder from "./Heder";
import { useContext } from "react";
import { MyContext } from "../context/Context";
import Item1 from "./servicItem/Item1";
import Item2 from "./servicItem/Item2";
import Item3 from "./servicItem/Item3";
import Item4 from "./servicItem/Item4";
import Item5 from "./servicItem/Item5";
import Item6 from "./servicItem/Item6";
import Up from "./Img/Pu.png";

function Services() {
  const styles = useServicesStyles();
  const { value, updateValue } = useContext(MyContext);
  const handleUpdateValue = (number) => {
    updateValue(number);

    // Прокручиваем страницу вверх
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляем плавную анимацию прокрутки
    });
  };

  return (
    <div className={styles.neonBackground}>
      <div className={styles.app}>
        <h1 className={styles.pageTitle}>services </h1>
        <div>
          <div>
            <p className={styles.ptag}>
              ___________________________ Other IT Services
              ___________________________
            </p>
            <Item1 />
            {value !== 1 && (
              <button
                onClick={() => handleUpdateValue(1)}
                className={
                  (value === 2 && styles.buttonUp2) ||
                  (value === 3 && styles.buttonUp3) ||
                  (value === 4 && styles.buttonUp4) ||
                  (value === 5 && styles.buttonUp5) ||
                  (value === 6 && styles.buttonUp6)
                }
              >
               <img className={styles.img} src={Up} alt="Img" />
               <p>Up</p>
              </button>
            )}
            <Item2 />
            {value !== 2 && (
              <button
                onClick={() => handleUpdateValue(2)}
                className={styles.buttonUp2}
              >
              <img className={styles.img} src={Up} alt="Img" />
              <p>Up</p>
              </button>
            )}
            <Item3 />
            {value !== 3 && (
              <button
                onClick={() => handleUpdateValue(3)}
                className={styles.buttonUp3}
              >
                <img className={styles.img} src={Up} alt="Img" />
                <p>Up</p>
              </button>
            )}
            <Item4 />
            {value !== 4 && (
              <button
                onClick={() => handleUpdateValue(4)}
                className={styles.buttonUp4}
              >
                <img className={styles.img} src={Up} alt="Img" />
                <p>Up</p>
              </button>
            )}
            <Item5 />
            {value !== 5 && (
              <button
                onClick={() => handleUpdateValue(5)}
                className={styles.buttonUp5}
              >
                <img className={styles.img} src={Up} alt="Img" />
                <p>Up</p>
              </button>
            )}
            <Item6 />
            {value !== 6 && (
              <button
                onClick={() => handleUpdateValue(6)}
                className={styles.buttonUp6}
              >
                <img className={styles.img}  src={Up} alt="Img" />
                <p>Up</p>
              </button>
            )}
          </div>
        </div>
      </div>
      <Heder />
    </div>
  );
}

export default Services;
