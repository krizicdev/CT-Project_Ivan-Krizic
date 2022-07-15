import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import "./style/ContactList.css";

const ContactCard = (props) => {
  const { id, name, lastname, email, category } = props.contact;
  return (
    <div className="cc">
      <img className="icon" src={user} alt="" />
      <div className="">
        <div className="font">
          <h2>
            {name} {lastname}
          </h2>
        </div>
        <div className="font">
          <br /> {email} <br /> {category}
        </div>
      </div>

      <div className="pencil">
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i
          className="user outline icon"
          style={{ color: "#011393", marginTop: "6px" }}
        ></i>
        </Link>
      </div>

      <div className="trash">
        <i
          className="trash alternate outline icon"
          style={{ color: "#F34E9B", marginTop: "7px" }}
          onClick={() => props.clickHander(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
