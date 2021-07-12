import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import EditAppointment from "./EditAppointment";

class Appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditApp: false,
    };
  }

  toggleUpdateAppointment(appointment) {
    this.setState(
      {
        showEditApp: !this.state.showEditApp,
        selectedAppointment: appointment,
      },
      () => {
        this.props.getAppointment();
      }
    );
  }

  render() {
    if (this.state.showEditApp) {
      return <EditAppointment />;
    } else {
      return (
        <div className="appointmentContainer">
          <h1>Here lies the appointments</h1>
          <table className="table">
            <thead>
              <tr>
                <th>All Appointments</th>
              </tr>
            </thead>
            <tbody>
              {this.props.appointments.map((appointment) => {
                return (
                  <tr key={appointment.appointment_id}>
                    <td>{`${appointment.firstname} ${appointment.lastname}`}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.description}</td>
                    <td
                      className="btn btn-dark"
                      onDoubleClick={() => this.toggleUpdateAppointment()}
                    >
                      Edit Appointment
                    </td>
                    <td
                      className="btn btn-danger"
                      onDoubleClick={() =>
                        this.props.deleteAppointment(appointment.appointment_id)
                      }
                    >
                      Cancel Appointment
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/newAppointment">
            <button className="btn btn-primary">Create New Appointment</button>
          </Link>
        </div>
      );
    }
  }
}

export default Appointments;
