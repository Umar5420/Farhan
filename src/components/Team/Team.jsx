import { Link } from "react-scroll";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Moli_kuch from "../../img/Moli_khuch.jpg";
import Anotherkuch from "../../img/anotherKuch.jpg";
import Farhan from "../../img/farhan.jpg";
import Maryem from "../../img/Maryem.jpg";
import Aliya from "../../img/Aliya.jpg";
import Areeba from "../../img/Areeba.jpg";
import Farheen from "../../img/Fareen.jpg";
import Sadana from "../../img/Sadaba.jpg";
import Sadia from "../../img/sadia.jpg";
import Zoya from "../../img/Zoya.jpg";
import Omer from "../../img/Umar.jpg";
import Farwa from "../../img/farwa.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import "./Team.css";

const TeamMember = ({ name, field, about, image }) => {
  const { darkMode } = useContext(themeContext);

  return (
    <div id="teammembers" className={`team-member ${darkMode ? 'dark' : ''}`}>
      <img src={image} alt={name} className="team-member-img" />
      <div className="team-member-info">
        <p className="field">{field}</p>
        <h2>{name}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "Muhammad Farhan",
      field: "CEO",
      about: "Experienced Wordpress Designer, Shopify, SEO Expert, CEO.",
      image: Farhan,
    },
    {
      name: "Sadia",
      field: "Designer",
      about: "Experienced Graphics Designer, Video Editor, Web Developer Plus Designer, Figma Expert,",
      image: Sadia,
    },
    {
      name: "Maryam",
      field: "Manager, Designer",
      about: "Experienced Web Designer, Wordpress Designer.",
      image: Maryem,
    },
    {
      name: "Omer Sadik",
      field: "Senior Developer",
      about: "Experienced Expert Developer. App Developer And Web Developer.",
      image: Omer,
    },
    {
      name: "Saad",
      field: "Video Editor",
      about: "Experienced Video Editor, SEO Expert.",
      image: Anotherkuch,
    },
    {
      name: "Ahmed",
      field: "Web Designer",
      about: "Experienced Wordpress Developer, Shopify, SEO Expert.",
      image: Moli_kuch,
    },
    {
      name: "Jahangir",
      field: "Web Designer",
      about: "Experienced Wordpress Developer, Shopify, SEO Expert.",
      image: Moli_kuch,
    },
    {
      name: "Ume Farwa",
      field: "Graphics Designer, Video Editor",
      about: "Experienced Graphics Designer, Video Editor.",
      image: Areeba,
    },
    {
      name: "Aliya",
      field: "Graphics Designer",
      about: "Experienced Graphics Designer, Client Hunter.",
      image: Aliya,
    },
    {
      name: "Areeba",
      field: "Graphics Designer",
      about: "Experienced Graphics Designer, Client Hunter.",
      image: Areeba,
    },
    {
      name: "Zoya",
      field: "Graphics Designer",
      about: "Experienced Graphics Designer.",
      image: Zoya,
    },
    {
      name: "Farheen",
      field: "Graphics Designer",
      about: "Experienced Graphics Designer, Client Hunter.",
      image: Farheen,
    },
    {
      name: "Sadana",
      field: "Web Designer",
      about: "Experienced Graphics Designer",
      image: Sadana,
    },
    {
      name: "Fawrwa",
      field: "Web Designer",
      about: "Experienced Graphics Designer",
      image: Farwa,
    },
    
    // Add more team members as needed
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      slidesPerGroup={3}
      pagination={{ clickable: true }}
      effect="cube"
      style={{ cursor: 'grab' }} // Set cursor style to grab
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={index}>
          <TeamMember
            name={member.name}
            field={member.field}
            about={member.about}
            image={member.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Team;
