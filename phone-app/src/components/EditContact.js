import React from "react";
import "./style/EditContact.css";
import user from "../images/user.png";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const {
      id,
      name,
      lastname,
      email,
      category,
    } = props.location.state.contact;
    this.state = {
      id,
      name,
      lastname,
      email,
      category,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.lastname === "" ||
      this.state.email === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    this.props.updateContactHandler(this.state);
    this.setState({ name: "", lastname: "", email: "", category: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="details">
        <img className="editicon" src={user} alt="" />

        <div className="editposition">
          <form className="" onSubmit={this.update}>
            <div className="">
              <label>Firstname</label> <br />
              <input
                className="editfield"
                type="text"
                name="name"
                placeholder="Enter firstname..."
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <br />
            <div className="">
              <label>Lastname</label> <br />
              <input
                className="editfield"
                type="text"
                lastname="lastname"
                placeholder="Enter lastname..."
                value={this.state.lastname}
                onChange={(e) => this.setState({ lastname: e.target.value })}
              />
            </div>
            <br />
            <div className="">
              <label>Email</label> <br />
              <input
                className="editfield"
                type="text"
                name="email"
                placeholder="Enter email address..."
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <br />
            <div className="">
              <label>Category</label> <br />
              <select
                className="editchoose"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
                id="category"
                name="category"
              >
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
              </select>
            </div>
            <br />
            <button className="editbutton">Update</button>
          </form>

          <Link to="/">
          <button className="cancelbutton">Return</button>
          </Link>

        </div>
      </div>
    );
  }
}

export default EditContact;
