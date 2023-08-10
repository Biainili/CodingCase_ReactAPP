import { createUseStyles } from "react-jss";

export const useLowerBarStyles = createUseStyles({
  menuBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "120%",
    height: "300px",
    zIndex: 99,
    background: "linear-gradient( royalblue, black)",
  },
  forButton1: {
    position: "fixed",
    bottom: 220,
    left: 10,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  forButton2: {
    position: "fixed",
    bottom: 220,
    left: 315,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  forButton3: {
    position: "fixed",
    bottom: 220,
    left: 550,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  forButton4: {
    position: "fixed",
    bottom: 220,
    left: 835,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  forButton5: {
    position: "fixed",
    bottom: 220,
    left: 1075,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  forButton6: {
    position: "fixed",
    bottom: 220,
    left: 1340,
    fontSize: "25px",
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Georgia, serif",
    fontWeight: "bold",
    padding: "18px 25px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "black",
      boxShadow: "0 0 0 2px black",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.8)",
    },
    animation: "$fadeIn 0.5s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  buttonImagePh1: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "21%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
  buttonImagePh2: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
  buttonImagePh3: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "20%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
  buttonImagePh4: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "5%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
  buttonImagePh5: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "9%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
  buttonImagePh6: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "132%",
    left: "0%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
    transition:
      "transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2) rotate(360deg)",
    },
  },
});
