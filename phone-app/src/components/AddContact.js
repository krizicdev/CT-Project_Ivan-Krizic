import React from "react";
import "./style/AddContact.css";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


class AddContact extends React.Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    category: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.lastname === "" ||
      this.state.email === "" ||
      this.state.category === "choose" ||
      this.state.category === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", lastname: "", email: "", category: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="field3">
        <img className="editicons" src={user} alt="" />
        <div className="formposition">
          <form className="" onSubmit={this.add}>
            <div className="">
              <label>Firstname</label> <br />
              <input
                className="field"
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
                className="field"
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
                className="field"
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
                className="choose"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
                id="category"
                name="category"
              >
                <option value="choose">Choose</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Work">Work</option>
                <option value="School">School</option>
              </select>
            </div>
            <br />

            <button className="button">Add</button>
          </form>
          <Link to="/">
            <button className="cancelbutton">Return</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(AddContact);
