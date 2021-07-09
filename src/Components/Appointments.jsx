import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Appointments extends Component {
  render() {
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
                  <button className="btn btn-dark">Edit Appointment</button>
                  <button
                    className="btn btn-danger"
                    onDoubleClick={() =>
                      this.props.deleteAppointment(appointment.appointment_id)
                    }
                  >
                    Cancel Appointment
                  </button>
                </tr>
              );
            })}
            <tr className="appointment-button">
              <Link to="/newAppointment">
                <button className="btn btn-primary">
                  Create New Appointment
                </button>
              </Link>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Appointments;
