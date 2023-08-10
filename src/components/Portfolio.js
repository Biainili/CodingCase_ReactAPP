import React from "react";
import Heder from "./Heder";
import { useProtfolioStyles } from "./Portfolio.styles";

function Portfolio() {
  const styles = useProtfolioStyles();
  return (
    <div className={styles.neonBackground}>
      <div className={styles.app}>
        <Heder />
      </div>
      <div>
        <h2 className={styles.heading}>Portfolio </h2>
      </div>
    </div>
  );
}

export default Portfolio;
