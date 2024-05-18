"use client";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import { FaCss3, FaReact } from "react-icons/fa";
import Slider from "react-slick";
import promotionLoginImg from "Assets/Images/PromotionLogin.png";

const Works = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <div className="mt-20">
      <Divider
        style={{ height: "60px" }}
        orientation="left"
        orientationMargin="0"
      >
        <p className="text-[#A6BBCC] text-3xl md:text-[50px] class">Works</p>
      </Divider>
      <Slider {...settings}>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer bg-[#2a2a31] rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Works;
