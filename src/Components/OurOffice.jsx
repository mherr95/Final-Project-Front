import React, { Component } from "react";
import "../ComponentsCSS/OurOffice.css";

class OurOffice extends Component {
  render() {
    return (
      <div>
        <div className="background-img">
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
      </div>
    );
  }
}

export default OurOffice;
