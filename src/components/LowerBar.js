import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import { useLowerBarStyles } from "./LowerBar.styles";
import Ph1 from "./Img/ph1.jpg";
import Ph2 from "./Img/ph2.jpg";
import Ph3 from "./Img/ph3.jpg";
import Ph4 from "./Img/ph4.jpg";
import Ph5 from "./Img/ph5.jpg";
import Ph6 from "./Img/ph6.jpg";
import { useContext } from "react";
import { MyContext } from "../context/Context";

function LowerBar() {
  const styles = useLowerBarStyles();
  const { value, updateValue } = useContext(MyContext);

  return (
    <div className={styles.menuBar}>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton1} onClick={() =>updateValue(1)}>
          Web Development
          <img src={Ph1} alt="Img" className={styles.buttonImagePh1} />
        </button>
      </NavLink>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton2} onClick={() => updateValue(2)}>
          UI/UX design
          <img src={Ph2} alt="Icon" className={styles.buttonImagePh2} />
        </button>
      </NavLink>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton3} onClick={() => updateValue(3)}>
          Graphic Desain
          <img src={Ph3} alt="Img" className={styles.buttonImagePh3} />
        </button>
      </NavLink>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton4} onClick={() => updateValue(4)}>
          Chat BOT
          <img src={Ph4} alt="Icon" className={styles.buttonImagePh4} />
        </button>
      </NavLink>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton5} onClick={() => updateValue(5)}>
          Marketing
          <img src={Ph5} alt="Icon" className={styles.buttonImagePh5} />
        </button>
      </NavLink>
      <NavLink to={"/services"} style={{ textDecoration: "none" }}>
        <button className={styles.forButton6} onClick={() => updateValue(6)}>
          DevOps
          <img src={Ph6} alt="Icon" className={styles.buttonImagePh6} />
        </button>
      </NavLink>
    </div>
  );
}

export default LowerBar;
