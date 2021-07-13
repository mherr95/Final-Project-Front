import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

//Components
import Appointments from "./Components/Appointments";
import Home from "./Components/Home";
import NewAppointment from "./Components/NewAppointment";
import EditAppointment from "./Components/EditAppointment";

const appointmentURL = "http:///localhost:5000/appointments";

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
          <div className="navigation-top">
            <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">
                <img
                  src="https://www.auburndentalcenterga.com/images/logo_black.png"
                  alt="home-logo"
                  className="logo"
                />
              </Navbar.Brand>
              <Nav className="mr-auto">
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
            {/* <Navbar
              collapseOnSelect
              expand="sm"
              bg="light"
              className="navItems navbar"
            >
              <img
                src="https://www.auburndentalcenterga.com/images/logo_black.png"
                alt="home-logo"
                className="logo"
              />
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
            </Navbar> */}
            {/* <Navbar className="navItems navbar">
              <ul>
                <li>
                  <Link to="newAppointment" className="item-1">
                    Appointment Request
                  </Link>
                </li>
                <li>
                  <Link to="/" className="item-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/staff" className="item-3">
                    Staff
                  </Link>
                </li>
                <li>
                  <Link to="/ouroffice" className="item-4">
                    Our Office
                  </Link>
                </li>
                <li>
                  <Link to="appointments" className="item-">
                    Appointments
                  </Link>
                </li>
              </ul>
            </Navbar> */}
          </div>
        </div>
        <Route path="/" exact component={Home} />
        <Route path="/staff" />
        <Route path="/ouroffice" />
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
        <Route
          path="/editappointment"
          render={(props) => (
            <EditAppointment
              {...props}
              getAppointment={this.getAppointment}
              appointments={this.state.appointments}
            />
          )}
        ></Route>
      </BrowserRouter>
    );
  }
}

export default App;
