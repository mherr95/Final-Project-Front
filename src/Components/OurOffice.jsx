import React, { Component } from "react";
import "../ComponentsCSS/OurOffice.css";

class OurOffice extends Component {
  render() {
    return (
      <div>
        <div className="background-img1">
          <img
            src="https://www.yatescenterdental.com/assets/videos/video-v1-bg.jpg"
            alt="background"
          />
        </div>
        <div className="office-building">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO-6geYLYlpQC5MaoBPlHlUt8FsWAWnz0gV28l3=s1600-w400"
            alt="office-img"
          />
        </div>
        <div className="office-content">
          <h1>Our Auburn Family Dental Office</h1>
          <p>
            Comfort and convenience are the hallmarks of Auburn Dental Center’s
            office operations.We have added two new operatories to help care for
            our patients needs. To ensure your convenience, below is the
            information you need about our hours, location, appointment
            scheduling, insurance acceptance and billing.
          </p>
          <p>
            Auburn Dental Center 1310 Atlanta Highway Auburn, GA 30011 (770)
            339-4690
          </p>
          <p>
            Monday - Thursday: 8:00 AM - 5:00 PM
            <br />
            Friday, Saturday & Sunday: CLOSED
          </p>
          <h2>Appointments</h2>
          <p>
            We know you do have choices when choosing a Dentist in Auburn, GA so
            we have made requesting an appointment a simple process via our Web
            site. If, for any reason you cannot keep a scheduled appointment, or
            will be delayed, please call us as soon as possible.We reserve the
            right to charge a missed appointment fee with our hygienist of 75.00
            and with Dr Herr of 125.00. It is our policy that all minor children
            MUST be accompanied by a parent or guardian. If the patient has
            orthodontic appliances we request that you have the wires removed
            for diagnostic reasons. (we can coordinate with your orthodontist
            for you).
          </p>
          <h2>Insurance and Billing</h2>
          <p>
            We accept most traditional and PPO insurance plans. Please contact
            our office to verify acceptance of your plan. Auburn Dental Center
            is not participating in any Health Management Organizations at this
            time. We accept cash or credit cards (Visa, Mastercard, Discover).
            We are happy to file insurance for your reimbursement as long as you
            are free to choose your own dentist.
          </p>
        </div>
      </div>
    );
  }
}

export default OurOffice;
