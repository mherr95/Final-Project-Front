import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

//Components
import Appointments from "./Components/Appointments";
import Home from "./Components/Home";
import NewAppointment from "./Components/NewAppointment";
import Staff from "./Components/Staff";
import OurOffice from "./Components/OurOffice";

let appointmentURL;

if (process.env.NODE_ENV === "development") {
  appointmentURL = "https://boiling-basin-30116.herokuapp.com/appointments";
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
    this.getAppointment = this.getAppointment.bind(this);
    this.handleAddAppointment = this.handleAddAppointment.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  componentDidMount() {
    this.getAppointment();
  }

  getAppointment() {
    fetch(appointmentURL)
      .then(
        (data) => {
          return data.json();
        },
        (err) => {
          console.log(err);
        }
      )
      .then(
        (parseData) => this.setState({ appointments: parseData }),
        (err) => console.log(err)
      );
  }

  handleAddAppointment(appointment) {
    const copyAppointment = [...this.state.appointments];
    copyAppointment.unshift(appointment);
    this.setState({
      appointments: copyAppointment,
    });
  }

  deleteAppointment(id) {
    fetch(`${appointmentURL}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.appointments.findIndex(
        (appointment) => appointment.appointment_id === id
      );
      const copyAppointment = [...this.state.appointments];
      copyAppointment.splice(findIndex, 1);

      this.setState({
        appointments: copyAppointment,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <Navbar bg="light" variant="light" fixed="top">
            <Nav>
              <img
                src="https://www.auburndentalcenterga.com/images/logo_black.png"
                alt="home-logo"
                className="logo"
              />
            </Nav>
            <Nav className="navbar-items">
              <Link to="/" className="item">
                Home
              </Link>
              <Link to="/staff" className="item">
                Staff
              </Link>
              <Link to="/ouroffice" className="item">
                Our Office
              </Link>
              <Link to="newAppointment" className="item">
                Appointment Request
              </Link>
              <Link to="appointments" className="item">
                Appointments
              </Link>
            </Nav>
          </Navbar>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/staff" component={Staff} />
        <Route path="/ouroffice" component={OurOffice} />
        <Route
          path="/appointments"
          render={(props) => (
            <Appointments
              {...props}
              getAppointment={this.getAppointment}
              appointments={this.state.appointments}
              handleAddAppointment={this.handleAddAppointment}
              deleteAppointment={this.deleteAppointment}
            />
          )}
        />
        <Route
          path="/newAppointment"
          render={(props) => (
            <NewAppointment
              {...props}
              getAppointment={this.getAppointment}
              handleAddAppointment={this.handleAddAppointment}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
