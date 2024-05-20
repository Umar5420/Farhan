import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Port1 from "../../img/port1.jpg";
import Port2 from "../../img/port2.jpg";
import Port3 from "../../img/port3.jpg";
import Port4 from "../../img/port4.jpg";
import Port5 from "../../img/port5.jpg";
import Port6 from "../../img/port6.jpg";
import Port7 from "../../img/port7.jpg";
import Port8 from "../../img/port8.jpg";
import Port9 from "../../img/port9.jpg";
import Port10 from "../../img/port10.jpg";
import Port11 from "../../img/port11.jpg";
import Port12 from "../../img/port12.jpg";
import Port13 from "../../img/port13.jpg";
import Port14 from "../../img/port14.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Port1} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port2} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port3} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port4} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port5} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port6} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port7} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port8} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port9} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port10} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port11} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port12} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port13} className="portfolio-image" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port14} className="portfolio-image" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
