import { createUseStyles } from "react-jss";
import { keyframes } from "@mui/system";

export const useItemStyles = createUseStyles({
  buttonImagePh1: {
    width: "230px",
    height: "230px",
    marginBottom: "35px",
    position: "absolute",
    top: "28%",
    left: "5%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH1: {
    color: "white",
    position: "absolute",
    top: "18%",
    left: "40%",
    fontWeight: "bold",
    fontSize: "38px",
  },
  text1: {
    width: "850px",
    height: "290px",
    color: "white",
    position: "absolute",
    top: "32%",
    left: "25%",
    fontWeight: "bold",
    fontSize: "23px",
  },
  buttonImagePh2: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "95%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH2: {
    position: "absolute",
    top: "90%",
    left: "30%",
  },
  text2: {
    width: "600px",
    height: "180px",
    position: "absolute",
    top: "99%",
    left: "30%",
  },
  buttonImagePh3: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "127%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH3: {
    position: "absolute",
    top: "122%",
    left: "30%",
  },
  text3: {
    width: "600px",
    height: "180px",
    position: "absolute",
    top: "130%",
    left: "30%",
  },
  buttonImagePh4: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "160%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH4: {
    position: "absolute",
    top: "155%",
    left: "30%",
  },
  text4: {
    width: "600px",
    height: "180px",
    position: "absolute",
    top: "164%",
    left: "30%",
  },
  buttonImagePh5: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "194%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH5: {
    position: "absolute",
    top: "188%",
    left: "30%",
  },
  text5: {
    width: "600px",
    height: "180px",
    position: "absolute",
    top: "197%",
    left: "30%",
  },
  buttonImagePh6: {
    width: "160px",
    height: "160px",
    marginBottom: "35px",
    position: "absolute",
    top: "228%",
    left: "18%",
    borderRadius: "50%",
    border: "4px solid #0000ff",
  },
  textH6: {
    position: "absolute",
    top: "221%",
    left: "30%",
  },
  text6: {
    width: "600px",
    height: "180px",
    position: "absolute",
    top: "230%",
    left: "30%",
  },
  buttonS: {
    position: 'absolute',
    top: '35%',
    left: '85%',
    width: '150px',
    height: '150px',
    backgroundColor: 'royalblue',
    borderRadius: '25px',
    border: 'none',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Raleway sans-serif',
    transition: 'transform 0.3s ease',
    '&:hover': {
      animation: '$borderAnimation 1s linear infinite',
    },
  },
  '@keyframes borderAnimation': {
    '0%': {
      boxShadow: '0 0 0 0 rgba(65, 105, 225, 0.5)',
    },
    '50%': {
      boxShadow: '0 0 10px 5px rgba(65, 105, 225, 0.5)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(65, 105, 225, 0.5)',
    },
  },
});
