import React, { Component } from "react";
import "../ComponentsCSS/newAppointment.css";
import { Form, Button } from "react-bootstrap";

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
      showEditApp: false,
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

  //   handleUpdateAppointment(id) {
  //     fetch(`${appointmentURL}/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstname: this.state.firstname,
  //         lastname: this.state.lastname,
  //         phone: this.state.phone,
  //         email: this.state.email,
  //         date: this.state.date,
  //         description: this.state.description,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((parseData) => {
  //         const copyAppointment = [...this.state.appointments];
  //         const findIndex = this.state.appointment.findIndex(
  //           (appointment) => appointment.appointment_id === parseData.id
  //         );
  //         copyAppointment[findIndex] = parseData;

  //         this.setState({
  //           appointment: copyAppointment,
  //         });
  //       });
  //   }

  render() {
    return (
      <div className="newAppointment-container">
        <h2 className="newAppointment-head">Appointment Request Form</h2>
        <p className="requestApp">
          Schedule an appointment with Auburn Dental Center Today!
        </p>
        <p className="requestApp">
          To request appointment availability, please fill out the form below.
          Our scheduling coordinator will contact you to confirm your
          appointment.
        </p>
        <Form onSubmit={this.handleSubmit} className="form-container">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Group controlId="firstname">
            <Form.Control
              type="text"
              id="firstname"
              onChange={this.handleChange}
              value={this.state.firstname}
              placeholder="First Name"
            />
          </Form.Group>
          {/* <Form.Label>Last Name</Form.Label> */}
          <Form.Group controlId="lastname">
            <Form.Control
              type="text"
              id="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
              placeholder="Last Name"
            />
          </Form.Group>
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Group controlId="phone">
            <Form.Control
              type="tel"
              id="phone"
              onChange={this.handleChange}
              value={this.state.phone}
              placeholder="000-000-0000"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Control
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="example@example.com"
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Control
              type="text"
              id="description"
              onChange={this.handleChange}
              value={this.state.description}
              placeholder="Enter reason for visit"
            />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Control
              type="date"
              id="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* <form onSubmit={this.handleSubmit} className="form-container">
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
        </form> */}
      </div>
    );
  }
}

export default NewAppointment;
