import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Appointments from "./Components/Appointments";
import Home from "./Components/Home";
import NewAppointment from "./Components/NewAppointment";

const appointmentURL = "http:///localhost:5000/appointments";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
    this.getAppointment = this.getAppointment.bind(this);
    this.handleAddAppointment = this.handleAddAppointment.bind(this);
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
      if (response.status === 200) {
        const findIndex = this.state.appointments.findIndex(
          (appointment) => appointment.appointment_id === id
        );
        const copyAppointment = [...this.state.appointments];
        copyAppointment.splice(findIndex, 1);

        this.setState({
          appointments: copyAppointment,
        });
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="navigation-top">
            <div className="navItems">
              <Link to="/" className="item">
                Home
              </Link>
              <Link to="appointments" className="item">
                Appointments
              </Link>
            </div>
          </div>
        </div>
        <Route path="/" exact component={Home} />
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
