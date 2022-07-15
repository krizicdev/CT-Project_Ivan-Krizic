import React from "react";
import ContactCard from "./ContactCard";
import "./style/ContactList.css";
import { Link } from "react-router-dom";

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="">
      <div className="section">
        <h3>Contacts</h3>
        <Link to="/add">
          <button className="addbutton">+</button>
        </Link>
        <div className="searchicon">
          <i className="search icon" style={{ color: "white" }}></i>
        </div>

        <ul>
          <li style={{ color: "#F34E9B" }}>ALL &nbsp; &nbsp; &nbsp; &nbsp;</li>
          <li>FRIENDS &nbsp; &nbsp; &nbsp; &nbsp; </li>
          <li>FAMILY &nbsp; &nbsp; &nbsp; &nbsp;</li>
          <li>WORK &nbsp; &nbsp; &nbsp; &nbsp; </li>
          <li>SCHOOL </li>
        </ul>

        <div className="cardz">{renderContactList}</div>
      </div>
      <div className="sec2"></div>
    </div>
  );
};

export default ContactList;
