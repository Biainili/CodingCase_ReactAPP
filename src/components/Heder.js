import Menu from "./Menu";
import { createUseStyles } from "react-jss";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
function Heder() {
  const useStyles = createUseStyles({
    whiteText: {
      position: "absolute",
      top: "3%",
      left: "9%",
      transform: "translate(-50%, -50%)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      fontSize: "50px",
      fontWeight: "bold",
    },
    blueText: {
      position: "absolute",
      top: "3%",
      left: "19%",
      transform: "translate(-50%, -50%)",
      color: "royalblue",
      fontFamily: "Arial, sans-serif",
      fontSize: "50px",
      fontWeight: "bold",
    },
  });

  const styles = useStyles();

  return (
    <div>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
      {/* Upper Menu  */}
      <h1 className={styles.whiteText}>Coding</h1>
      <h1 className={styles.blueText}>Case</h1>
      </NavLink>
      <Menu />
    </div>
  );
}

export default Heder;

