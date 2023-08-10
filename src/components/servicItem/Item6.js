import Ph6 from "../Img/ph6.jpg";
import { useItemStyles } from "./Item.styles";
import { MyContext } from "../../context/Context";
import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Item6() {
  const styles = useItemStyles();
  const { value, updateValue } = useContext(MyContext);
  return (
    <div>
      <h2 className={value === 6 ? styles.textH1 : styles.textH6}>Dev Ops</h2>
      <img
        src={Ph6}
        alt="Img"
        className={value === 6 ? styles.buttonImagePh1 : styles.buttonImagePh6}
      />
      <p className={value === 6 ? styles.text1 : styles.text6}>
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
        {value === 6 && (
          <button className={styles.buttonS}>Get Started Make a Dev Ops</button>
        )}
      </NavLink>
    </div>
  );
}

export default Item6;
