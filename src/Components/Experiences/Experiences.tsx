"use client";
import React from "react";
import type { StepsProps } from "antd";
import { Avatar, Divider, List, Popover, Steps } from "antd";
import Image from "next/image";
import tipaxLogo from "Assets/Images/tipax-logo.png";
import { BiCircle, BiUserCheck } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";
import { MdWork } from "react-icons/md";
import Slider from "react-slick";

const Experiences: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed:2000,
    autoplaySpeed: 2000,
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
    <div className="mt-10">
      <div className="my-20">
        <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
          Experiences
        </p>
      </div>
      <List
      bordered
      dataSource={[
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
      ]
      }
      renderItem={(item) => {
       return <List.Item>
          <div className="mt-10">
           <div className="inline-block">
              <Image src={tipaxLogo} alt="tipax" className="w-28" />
            </div>
          <div>
            <div className="space-y-2">
              <h2 className="text-xl text-customColors-primaryTwo">Front-End Developer</h2>
              <p className="text-sm">Tipaxco/تیپاکس , Freelance</p>
              <p className="text-xs">Jul 2023 - Present , 11mos</p>
              <p className="text-xs">Tehran , Tehran Province Iran . Remote</p>
              <p className="text-sm text-left">
                {`
                    Front-end development of internal and external websites of
                    the company. - Construction of a panel for the
                    organization's price engineering, which has sections for
                    calculating the price of logistics transfers. - Creating a
                    promotion panel to register various events and register a
                    discount code for each event for the organization's
                    representatives across the country - Building a tracking
                    website to track the shipment - Creating a website to change
                    the user's destination address for delivery - Creating a
                    heatmap to view successful and unsuccessful delivery
                    packages for managers`}
              </p>
            </div>
          </div>
        </div>
        </List.Item>
      }}
    />
    </div>
  );
};

export default Experiences;
