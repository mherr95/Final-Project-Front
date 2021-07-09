import React, { Component } from "react";

const appointmentURL = "http://localhost:5000/newAppointment";

class NewAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      date: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(appointmentURL, {
      method: "POST",
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email: this.state.email,
        date: this.state.date,
        description: this.state.date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((response) => {
        this.props.getAppointment();
        this.props.handleAddAppointment(response);
        this.setState({
          firstname: "",
          lastname: "",
          phone: "",
          email: "",
          date: "",
          description: "",
        });
      });
  }

  render() {
    return (
      <div>
        <h1>New Appointment Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstname"></label>
          <input
            type="text"
            id="firstname"
            onChange={this.handleChange}
            value={this.state.firstname}
            placeholder="First Name"
          />
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            onChange={this.handleChange}
            value={this.state.lastname}
            placeholder="Last Name"
          />
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            onChange={this.handleChange}
            value={this.state.phone}
            placeholder="000-000-0000"
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="example@example.com"
          />
          <label htmlFor="date"></label>
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}
            placeholder="date"
          />
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            placeholder="Reason for visit"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewAppointment;
