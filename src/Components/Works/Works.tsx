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
  };
  return (
    <div className="mt-20">
      <Divider
        style={{ height: "60px" }}
        orientation="left"
        orientationMargin="0"
      >
        <p className="text-[#A6BBCC] text-[50px] class">Works</p>
      </Divider>
      <Slider {...settings}>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
        <div className="shadow-xl bg-white rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-xl" />
          <p className="text-center text-black">پنل پروموشن تیپاکس</p>
        </div>
      </Slider>
    </div>
  );
};

export default Works;
