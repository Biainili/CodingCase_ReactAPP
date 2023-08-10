import { createUseStyles } from "react-jss";

export const useProtfolioStyles = createUseStyles({
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
  heading: {
    fontSize: "35px",
    marginBottom: "10px",
    color: "white",
  },
});
