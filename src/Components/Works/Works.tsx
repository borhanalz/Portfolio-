"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CgClose } from "react-icons/cg";

const Works = () => {
  const images = [
    {
      original: "/assets/promotion/login.png",
      thumbnail: "/assets/promotion/login.png",
      title:'Tipax Promotion Panel',
      gallery: [
        {
          original: "/assets/promotion/login.png",
          thumbnail: "/assets/promotion/login.png",
        },
        {
          original: "/assets/promotion/page1.png",
          thumbnail: "/assets/promotion/page1.png",
        },
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
        {
          original: "/assets/promotion/page3.png",
          thumbnail: "/assets/promotion/page3.png",
        },
        {
          original: "/assets/promotion/page4.png",
          thumbnail: "/assets/promotion/page4.png",
        },
      ],
    },
    {
      original: "/assets/priceEngImg/login.png",
      thumbnail: "/assets/priceEngImg/login.png",
      title:'Tipax Promotion Panel',
      gallery: [
        {
          original: "/assets/priceEngImg/page1.png",
          thumbnail: "/assets/priceEngImg/page1.png",
        },
        {
          original: "/assets/priceEngImg/page2.png",
          thumbnail: "/assets/priceEngImg/page2.png",
        },
        {
          original: "/assets/priceEngImg/page3.png",
          thumbnail: "/assets/priceEngImg/page3.png",
        },
        {
          original: "/assets/priceEngImg/page4.png",
          thumbnail: "/assets/priceEngImg/page4.png",
        },
      ],
    },
    {
      original: "/assets/promotion/login.png",
      thumbnail: "/assets/promotion/login.png",
      title:'Tipax Promotion Panel',
      gallery: [
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
      ],
    },
    {
      original: "/assets/promotion/login.png",
      thumbnail: "/assets/promotion/login.png",
      title:'Tipax Promotion Panel',
      gallery: [
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
      ],
    },
    {
      original: "/assets/promotion/login.png",
      thumbnail: "/assets/promotion/login.png",
      title:'Tipax Promotion Panel',
      gallery: [
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
        {
          original: "/assets/promotion/page2.png",
          thumbnail: "/assets/promotion/page2.png",
        },
      ],
    },
  ];
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = (index: any) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };
  const handleGalleryClose = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="mt-20">
      <div className="my-20">
        <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
          Projects
        </p>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="cursor-pointer shadow-md" onClick={() => handleImageClick(index)}>
            <Image src={img.original} alt={`Slide ${index}`} width={500} height={500}/>
            <div className="p-2 bg-zinc-600 text-white">
              <p>{img.title}</p>
            </div>
          </div>
        ))}
      </Slider>
      {isGalleryOpen && (
        <div className="gallery-modal">
          <CgClose color="white" className="absolute top-5 right-5 cursor-pointer" onClick={handleGalleryClose}/>
          <ImageGallery items={images[currentImageIndex].gallery} />
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Works;
