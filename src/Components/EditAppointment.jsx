import React, { Component } from "react";
import Axios from "axios";

const appointmentURL = "http://localhost:5000/appointments";

export default class EditSong extends Component {
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
  }

  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }

  componentDidMount() {
    this.setState({
      firstname: this.props.appointment.firstname,
      lastname: this.props.appointment.lastname,
      phone: this.props.apponitment.phone,
      email: this.props.appointment.email,
      date: this.props.appointment.date,
      description: this.props.appointment.description,
    });
  }

  handleUpdateAppointment = async (id) => {
    const payload = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      date: this.state.date,
      description: this.state.description,
    };
    const headers = {
      "Content-type": "application/json",
    };
    const appointmentId = this.props.appointment.appointment_Id;
    await Axios.put(editAppointmentURL + `${appointmentId}`, payload, {
      headers: headers,
    }).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="body">
        <h1>Edit Appointment</h1>
        <form onSubmit={() => this.handleUpdateAppointment()}>
          <label htmlFor="firstname"></label>
          <input
            type="text"
            id="firstname"
            onChange={this.handleChange}
            value={this.props.firstname}
            placeholder="First Name"
          />
          <label htmlFor="lastname"></label>
          <input
            type="text"
            id="lastname"
            onChange={this.handleChange}
            value={this.props.lastname}
            placeholder="Last Name"
          />
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            onChange={this.handleChange}
            value={this.props.phone}
            placeholder="000-000-0000"
          />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            value={this.props.email}
            placeholder="example@example.com"
          />
          <label htmlFor="date"></label>
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={this.props.date}
            placeholder="date"
          />
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.props.description}
            placeholder="Reason for visit"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
