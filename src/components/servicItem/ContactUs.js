import { useContactUsStyles } from "./ContactUs.styles";
import ImageAnimation from "./ContactUs.styles";
import { useContext } from "react";
import { MyContext } from "../../context/Context";
import Heder from "../Heder";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Ph1 from "../Img/ph1.jpg";
import Ph2 from "../Img/ph2.jpg";
import Ph3 from "../Img/ph3.jpg";
import Ph4 from "../Img/ph4.jpg";
import Ph5 from "../Img/ph5.jpg";
import Ph6 from "../Img/ph6.jpg";
import Wep from "../Img/wep.jpg";

function ContactUs() {
  const { value, updateValue } = useContext(MyContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [valueSelect, setValueSelect] = useState(
    (value === 1 && "Web Delevopment") ||
      (value === 2 && "UI/UX desing") ||
      (value === 3 && "Graphic Desain") ||
      (value === 4 && "Chat BOT") ||
      (value === 5 && "Marketing") ||
      (value === 6 && "Dev Ops")
  );
  const [addCategory, setAddCategory] = useState(false);
  const [myCategory, setMyCategory] = useState([]);
  const styles = useContactUsStyles();

  const chengeValue = (e) => {
    if (e === "Web Development") {
      updateValue(1);
    } else if (e === "UI/UX desing") {
      updateValue(2);
    } else if (e === "Graphic Desain") {
      updateValue(3);
    } else if (e === "Chat BOT") {
      updateValue(4);
    } else if (e === "Marketing") {
      updateValue(5);
    } else {
      updateValue(6);
    }
  };

  const changeService = (e) => {
    setValueSelect(e.target.value);
    chengeValue(e.target.value);
  };

  const addCategoryFunc = () => {
    if (!myCategory.includes(valueSelect)) {
      setMyCategory((myCategory) => [...myCategory, valueSelect]);
    }
  };
  const removedItem = () => {
    const removedElement = myCategory.pop();

    setMyCategory([...myCategory]);
  };

  return (
    <div className={styles.neonBackground}>
      <div className={styles.app}>
        <Heder />
        <h1 className={styles.H1Tag}>contact us</h1>
        <h3 className={styles.fill}>Fill in the form</h3>

        <div className={styles.dialogContainer}>
          <input
            type="text"
            placeholder="Name Surnam"
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
          <label className={styles.label}>
            category
            <select
              className={styles.select}
              name="category"
              value={valueSelect}
              onChange={changeService}
            >
              <option value={valueSelect}>{valueSelect}</option>
              {valueSelect !== "UI/UX desing" && (
                <option value="UI/UX desing">UI/UX desing</option>
              )}
              {valueSelect !== "Graphic Desain" && (
                <option value="Graphic Desain">Graphic Desain</option>
              )}
              {valueSelect !== "Chat BOT" && (
                <option value="Chat BOT">Chat BOT</option>
              )}
              {valueSelect !== "Marketing" && (
                <option value="Marketing">Marketing</option>
              )}
              {valueSelect !== "Dev Ops" && (
                <option value="Dev Ops">Dev Ops</option>
              )}
              {valueSelect !== "Web Development" && (
                <option value="Web Development"> Web Development</option>
              )}
            </select>
          </label>
          <button className={styles.addCategoryPlus} onClick={addCategoryFunc}>
            <FaPlus />
            Add category
          </button>
          {myCategory.length > 0 && (
            <button onClick={removedItem} className={styles.addCategoryDel}>
              <MdDelete />
            </button>
          )}
          <img
            src={
              (value === 1 && Ph1) ||
              (value === 2 && Ph2) ||
              (value === 3 && Ph3) ||
              (value === 4 && Ph4) ||
              (value === 5 && Ph5) ||
              (value === 6 && Ph6)
            }
            alt="Img"
            className={styles.buttonImageph}
          />
          <p className={styles.pTag}>select service category</p>
          <p className={styles.pTag2}>select categories and add</p>
          <p className={styles.pTag3}>
            if you have requests for several categories, you can add to the list
          </p>
          {myCategory.length > 0 && (
            <p className={styles.pTag1}>My category </p>
          )}
          {myCategory.length > 0 && (
            <div className={styles.categoryList}>
              {myCategory.map((elem) => (
                <span key={elem} className={styles.categoryItem}>
                  {elem}
                </span>
              ))}
            </div>
          )}

          <textarea
            placeholder="Description foe deal"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className={styles.inputFieldD}
          />
          <button className={styles.submitButton} type="submit">
            Send request
          </button>
        </div>
        <div>
          <img
            id="image-element"
            src={Wep}
            alt="Img"
            className={`${styles.wepImg} animate`}
          />

          <p className={styles.textPTagelast1}>
            Thank you for your request! Our team will review it within 15 hours.
            Our specialist will contact you shortly to discuss your order in
            detail. We appreciate your patience and look forward to assisting
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
