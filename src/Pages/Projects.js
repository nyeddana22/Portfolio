import { React, Component, useState } from "react";
import Slider from "react-slick";
import "./Projects.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import memoji from "../Assets/memoji.png";

const Projects = () => {
  const slides = [memoji, memoji, memoji, memoji, memoji];

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdChevronLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="projects-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={slide} alt={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Projects;
