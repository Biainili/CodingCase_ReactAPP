import { createUseStyles } from "react-jss";

export const useMenuStyles = createUseStyles({
  strippedMenu: {
    position: "fixed",
    top: 20,
    right: 20,
    backgroundColor: "royalblue",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    fontFamily: "Georgia, serif",
    fontSize: "25px",
    fontWeight: "bold",
  },
  menuList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuItem: {
    marginLeft: "30px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  activeLanguage: {
    textDecoration: "underline",
  },
  TgPng: {
    position: "absolute",
    top: 15,
    left: 2,
    border: "2px solid black",
    borderRadius: "50px",
    width: "38px",
    height: "38px",
  },
});
