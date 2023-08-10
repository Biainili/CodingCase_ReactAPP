import { createUseStyles } from "react-jss";
import { keyframes } from "@mui/system";
import React, { useState, useEffect } from "react";

const ImageAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const imageElement = document.getElementById("image-element");
      const imagePosition = imageElement.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight) {
        // If the image is in view, add the class to trigger animation
        imageElement.classList.add("animate");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return null; // Since this component only handles the animation logic, return null
};

export const useContactUsStyles = createUseStyles({
  H1Tag: {
    position: "absolute",
    top: -890,
    left: -220,
    position: "relative",
    padding: "20px",
    fontSize: "45px",
    color: "white",
    textDecoration: "none",
    borderBottom: "4px solid transparent",
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "royalblue",
    },
  },
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
  dialogContainer: {
    position: "absolute",
    top: 150,
    left: 110,
    display: "flex",
    width: "80%",
    height: "520px",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    backgroundColor: "rgb(202, 208, 214)",
    borderRadius: "15px",
    border: "6px solid #0000ff",
    animation: "$fadeIn 0.3s",
  },
  inputField: {
    width: "100%",
    height: "25px",
    marginBottom: "10px",
    padding: "15px",
    borderRadius: "5px",
    border: "2px solid royalblue",
    outline: "none",
    color: "royalblue",
    fontWeight: "bold", // Жирный шрифт
    "::placeholder": {
      color: "royalblue", // Цвет placeholder
      fontWeight: "bold", // Жирный шрифт для placeholder
    },
  },
  inputFieldD: {
    width: "95%",
    height: "120px",
    position: "absolute",
    top: 360,
    marginBottom: "-50px",
    padding: "15px",
    borderRadius: "5px",
    border: "2px solid royalblue",
    outline: "none",
    fontSize: "16px",
    resize: "none",
    color: "royalblue",
    fontWeight: "bold", // Жирный шрифт
    "::placeholder": {
      color: "royalblue", // Цвет placeholder
      fontWeight: "bold", // Жирный шрифт для placeholder
    },
  },
  submitButton: {
    position: "absolute",
    top: 530,
    width: "75%",
    height: "40px",
    backgroundColor: "royalblue",
    color: "white",
    fontFamily: "Apple Chancery, cursive",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px",
    position: "absolute",
    top: "43%",
    left: "19%",
  },

  select: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    border: "3px solid royalblue",
    color: "royalblue",
    fontWeight: "bold",
  },
  fill: {
    position: "absolute",
    top: "7%",
    transform: "translateY(55%)",
    color: "white",
    fontFamily: "URW Chancery L, cursive",
    fontSize: "28px",
    fontWeight: "bold",
  },
  buttonImageph: {
    width: "110px",
    height: "110px",
    marginBottom: "35px",
    position: "absolute",
    top: "40%",
    left: "7%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  pTag: {
    fontFamily: "Apple Chancery, cursive",
    color: "royalblue",
    position: "absolute",
    top: "55%",
    left: "21%",
  },
  pTag1: {
    color: "black",
    position: "absolute",
    top: "37%",
    left: "62%",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
  },
  categoryList: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
    position: "absolute",
    top: "43%",
    left: "62%",
    color: "white",
    border: "3px solid royalblue", // Добавляем рамку
    padding: "13px", // Добавляем отступ вокруг элементов
    borderRadius: "5px",
    background: "white",
  },
  categoryItem: {
    marginBottom: "4px",
    marginRight: "15px" /* Расстояние между элементами по горизонтали */,
    color: "#000000",
    fontWeight: "bold",
    color: "royalblue",
  },
  addCategoryPlus: {
    position: "absolute",
    top: "46.5%",
    left: "40%",
    fontSize: "22px",
    transition: "transform 0.3s",
    cursor: "pointer",
    color: "white",
    border: "3px solid royalblue",
    fontFamily: "Apple Chancery, cursive",
    borderRadius: "5px",
    background: "royalblue",
  },
  pTag2: {
    fontFamily: "Apple Chancery, cursive",
    color: "royalblue",
    position: "absolute",
    top: "55%",
    left: "40%",
  },
  pTag3: {
    fontFamily: "Apple Chancery, cursive",
    color: "royalblue",
    position: "absolute",
    top: "55%",
    left: "59%",
  },
  addCategoryDel: {
    position: "absolute",
    top: "46.5%",
    left: "56%",
    fontSize: "22px",
    transition: "transform 0.3s",
    cursor: "pointer",
    color: "white",
    border: "3px solid red",
    fontFamily: "Apple Chancery, cursive",
    borderRadius: "5px",
    background: "red",
  },
  wepImg: {
    width: '1280px',
    height: '520px',
    position: 'absolute',
    top: '105%',
    left: '7%',
    border: "6px solid #0000ff",
    borderRadius: '8px',
    animation: '$slideAnimation 5s infinite',
    opacity: 5, // Initially hide the image
    transition: 'opacity 10s ease', // Add a transition effect for opacity change
  },

  '@keyframes slideAnimation': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '50%': {
      transform: 'translateX(0%)',
    },
  },
  textPTagelast1: {
    width: "1480px",
    height: "500px",
    fontFamily: "URW Chancery L, cursive",
    fontSize: "35px",
    position: "absolute",
    top: "180%",
    left: "2%",
  },
});


export default ImageAnimation
