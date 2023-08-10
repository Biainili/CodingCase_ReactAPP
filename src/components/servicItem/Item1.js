import Ph1 from "../Img/ph1.jpg";
import { useItemStyles } from "./Item.styles";
import { useContext } from "react";
import { MyContext } from "../../context/Context";
import { useNavigate, NavLink } from "react-router-dom";

function Item1() {
  const styles = useItemStyles();
  const { value, updateValue } = useContext(MyContext);
  return (
    <div>
      <h2
        className={
          (value === 1 && styles.textH1) ||
          (value === 2 && styles.textH2) ||
          (value === 3 && styles.textH3) ||
          (value === 4 && styles.textH4) ||
          (value === 5 && styles.textH5) ||
          (value === 6 && styles.textH6)
        }
      >
        Web Development
      </h2>
      <img
        src={Ph1}
        alt="Img"
        className={
          (value === 1 && styles.buttonImagePh1) ||
          (value === 2 && styles.buttonImagePh2) ||
          (value === 3 && styles.buttonImagePh3) ||
          (value === 4 && styles.buttonImagePh4) ||
          (value === 5 && styles.buttonImagePh5) ||
          (value === 6 && styles.buttonImagePh6)
        }
      />
      <p
        className={
          (value === 1 && styles.text1) ||
          (value === 2 && styles.text2) ||
          (value === 3 && styles.text3) ||
          (value === 4 && styles.text4) ||
          (value === 5 && styles.text5) ||
          (value === 6 && styles.text6)
        }
      >
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
        {value === 1 && (
          <button className={styles.buttonS}>
            Get Started Make a Website
          </button>
        )}
      </NavLink>
    </div>
  );
}

export default Item1;
