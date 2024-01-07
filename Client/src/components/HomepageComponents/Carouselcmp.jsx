import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
let images = [
  { url: "https://kodedigital.expert/wp-content/uploads/2022/02/7.jpg" },
  { url: "https://kodedigital.expert/wp-content/uploads/2022/02/7.jpg" },
  { url: "https://kodedigital.expert/wp-content/uploads/2022/02/1.jpg" },
];

let divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "400px",
  backgroundSize: "cover",
};
function Carouselcmp() {
  return (
    <div className="SlideContainer">
      <Fade>
        {images.map((image, index) => (
          <div key={index}>
            <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Carouselcmp;
