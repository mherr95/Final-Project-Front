import React, { Component } from "react";
import "../ComponentsCSS/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <h2>Family Dentist in Auburn, GA</h2>
          <p>
            At Auburn Dental Center, we are committed to your individual
            attention and strive to provide personalized oral health care
            tailored for your unique dental needs. We value our patient
            relationships, making it our priority to provide gentle and
            compassionate dental care. Our goal is to provide our patients with
            the most comfortable and stress-free dental experience possible.
            Some of our most requested services include cosmetic dentistry, same
            day crowns, dental implants and adult orthodontic treatment.
          </p>
          <span>
            WE NOW OFFER AN IN-HOUSE DISCOUNT PLAN. CALL OUR OFFICE FOR MORE
            INFO!!!
          </span>
          <p></p>
          <p>
            Our mission is to deliver the highest standard of dentalcare to our
            patients as well as to educate and inspire them to maximize their
            oral health. For that reason, we've designed this website to provide
            you with all of the important information you need to make healthy
            decisions about your teeth and gums. We encourage you to browse our
            office pages, service details and patient education library whenever
            you have a question about our practice or your oral health. Whether
            you are looking for information on general dentistry, teeth
            whitening, crowns, preventive care, or periodontal exams, you can
            learn more about all of your options from our services page. For
            your convenience, you can also request appointments and patient
            forms directly from our website.
          </p>
          <p>
            We strive to provide you with the latest technology and techniques
            for your care and safety. Your comfort is extremely important to us.
            Our amenities include a beverage bar with bottled water, coffee,
            sodas, and juices as well as cable television in our reception area
            and treatment rooms.
          </p>
          <strong>
            Feel free to contact our office with any questions. We're your
            neighbor and we look forward to providing you and your family with
            all of your dental needs.
          </strong>
        </div>
      </div>
    );
  }
}

export default Home;
