import React, { useState } from "react";
import Menu from "./Menu";
import { useHomeStyles } from "./Home.styles";
import LowerBar from "./LowerBar";
import Dialog from "@mui/material/Dialog";
import Heder from "./Heder";

import { useNavigate, NavLink } from "react-router-dom";

function Home() {
  const [diagol, setDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");

  const styles = useHomeStyles();
  return (
    <>
      <div className={styles.neonBackground}> </div>
      <div className={styles.app}>
        {/* <div> </div> for animation */}
        <Heder />
        <div className={styles.content}>
          {/* Home page */}
          <div className={styles.container}>
            <p className={styles.paragraph}>
              Unlock the full potential of your business with our comprehensive
              range of cutting-edge IT services tailored to drive innovation,
              efficiency, and growth.
            </p>
            <NavLink to={"/contactus"} style={{ textDecoration: "none" }}>
              <button
                onClick={() => setDialog(true)}
                className={styles.buttonReq}
              >
                Request a consultation
              </button>
            </NavLink>
            {diagol && (
              <Dialog
                open
                onClose={() => {
                  setDialog(false);
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // className={styles.form}
              >
                <div className={styles.dialogContainer}>
                  <input
                    type="text"
                    placeholder="name surnam"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={styles.inputField}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={styles.inputField}
                  />
                  <input
                    type="link"
                    placeholder="Telegram or What's App"
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                    className={styles.inputField}
                  />
                  <button className={styles.submitButton} type="submit">
                    Send request
                  </button>
                  <button
                    className={styles.closeButton}
                    onClick={() => setDialog(false)}
                    type="close"
                  >
                    Close
                  </button>
                </div>
              </Dialog>
            )}
          </div>
        </div>
        <div className={styles.lower}>
          <LowerBar className={styles.homeLower} />
        </div>
      </div>
    </>
  );
}

export default Home;
