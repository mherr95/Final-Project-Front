import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Appointments extends Component {
  render() {
    return (
      <div className="appointmentContainer">
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
          <button className="btn btn-primary">Request New Appointment</button>
        </Link>
      </div>
    );
  }
}

export default Appointments;
