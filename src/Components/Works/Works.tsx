"use client";
import { Divider, Modal } from "antd";
import Image from "next/image";
import React, { useRef } from "react";
import { FaCss3, FaReact } from "react-icons/fa";
import Slider from "react-slick";
import promotionLoginImg from "Assets/Images/PromotionLogin.png";
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
const Works = () => {

  // const lgRef:any = useRef(null);
  // const images = [
  //   { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', alt: 'Image 1' },
  //   { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', alt: 'Image 2' },
  //   { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzQhMzN0sJnGfqdi2aHD7fzZWirfyYB1DoFc7EQPiUQ&s', alt: 'Image 3' },
  //   // Add more images as needed
  // ];
  // const openGallery = () => {
  //   if (lgRef.current) {
  //     lgRef.current.openGallery();
  //   }
  // };
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
      <div className="my-20">
        <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
          Projects
        </p>
      </div>
      <Slider {...settings}>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
        <div className="shadow-2xl cursor-pointer border rounded-xl mt-5">
          <Image src={promotionLoginImg} className="rounded-t-2xl" />
          <div className="py-4 border border-t-2">
          <p className="text-center">Tipax Promotion Panel</p>
          <p className="text-gray-400 text-center">Full Panel</p>
          </div>
        </div>
      </Slider>
      {/* <div>
      <img
        src={images[0].thumb}
        alt={images[0].alt}
        style={{ cursor: 'pointer' }}
        onClick={openGallery}
      />
      <LightGallery
        onInit={(ref) => {
          if (ref) {
            lgRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={images.map((image) => ({
          src: image.src,
          thumb: image.thumb,
          alt: image.alt,
        }))}
      />
    </div> */}
    </div>
  );
};

export default Works;
