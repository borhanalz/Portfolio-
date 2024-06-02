'use client'
import React from 'react'
import Slider from "react-slick";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiMui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { DiJqueryLogo, DiResponsive } from "react-icons/di";

const SkillsSlider = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        arrows:false,
        centerPadding: "60px",
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        slidesPerRow: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='mt-20'>
            <Slider {...settings}>
      <div>
          <h3><FaReact size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><FaCss3 size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><FaHtml5 size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><SiReactquery size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><TbBrandRedux size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><IoLogoJavascript size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><RiNextjsFill size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><SiMui size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><AiOutlineAntDesign size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><RiTailwindCssFill size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><FaSass size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><SiTypescript size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><BsBootstrap size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><DiResponsive size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><FaGithub size={60} color='#9ca3af'/></h3>
        </div>
        <div>
          <h3><DiJqueryLogo size={60} color='#9ca3af'/></h3>
        </div>
      </Slider>
        </div>
      );
}

export default SkillsSlider