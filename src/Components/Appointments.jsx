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
                <div>
                  <tr>
                    <td>{`${appointment.firstname} ${appointment.lastname}`}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.description}</td>
                  </tr>
                  <tr>
                    <button className="btn btn-light">Edit Appointment</button>
                    <button className="btn btn-light">
                      Cancel Appointment
                    </button>
                  </tr>
                </div>
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
