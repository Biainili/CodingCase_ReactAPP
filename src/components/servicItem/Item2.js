import Ph2 from "../Img/ph2.jpg";
import { useItemStyles } from "./Item.styles";
import { MyContext } from "../../context/Context";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Item2() {
  const styles = useItemStyles();
  const { value, updateValue } = useContext(MyContext);
  return (
    <div>
      <h2 className={value === 2 ? styles.textH1 : styles.textH2}>
        UI/UX desing
      </h2>
      <img
        src={Ph2}
        alt="Img"
        className={value === 2 ? styles.buttonImagePh1 : styles.buttonImagePh2}
      />
      <p className={value === 2 ? styles.text1 : styles.text2}>
        Welcome to our vibrant web development section! We take pride in
        providing comprehensive solutions for both the back-end and front-end of
        websites and applications. With our expertise in React JS, Next JS, Node
        JS, and other cutting-edge Frenchworks technologies, we ensure that your
        digital presence is built with the latest tools and frameworks. Our
        dedicated team offers personalized attention and tailored solutions to
        meet your unique requirements. Get in touch with us today and let's
        bring your vision to life!
      </p>
      <NavLink to={"/contactus"} style={{ textDecoration: "none" }}>
        {value === 2 && (
          <button className={styles.buttonS}> Get Started Make a Desing</button>
        )}
      </NavLink>
    </div>
  );
}

export default Item2;
