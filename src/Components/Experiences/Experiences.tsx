"use client";
import React from "react";
import type { StepsProps } from "antd";
import { Avatar, Divider, List, Steps } from "antd";
import Image from "next/image";
import tipaxLogo from "Assets/Images/tipax-logo.png";

const data = [
  {
    title: "Ant Design Title 1",
    current: 0,
  },
  {
    title: "Ant Design Title 2",
    current: 1,
    status: "error",
  },
  {
    title: "Ant Design Title 3",
    current: 2,
  },
  {
    title: "Ant Design Title 4",
    current: 1,
  },
];

const Experiences: React.FC = () => (
  <div className="mt-10">
    <Divider
      style={{ height: "60px" }}
      orientation="left"
      orientationMargin="0"
    >
      <p className="text-3xl md:text-[50px] text-[#A6BBCC]">Experiences</p>
    </Divider>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className="mt-10">
         <div className="flex shadow-xl border border-gray-950 rounded-2xl p-5">
         <Image src={tipaxLogo} alt="tipax" className="w-28 h-32 mt-7"/>
          <div className="text-white">
            <h2 className="text-xl">Front-End Developer</h2>
            <p>Tipaxco/تیپاکس , Freelance</p>
            <p>Jul 2023 - Present , 11mos</p>
            <p>Tehran , Tehran Province Iran . Remote</p>
            <p className="mt-4">
              Front-end development of internal and external websites of the
              company. - Construction of a panel for the organization's price
              engineering, which has sections for calculating the price of
              logistics transfers. - Creating a promotion panel to register
              various events and register a discount code for each event for the
              organization's representatives across the country - Building a
              tracking website to track the shipment - Creating a website to
              change the user's destination address for delivery - Creating a
              heatmap to view successful and unsuccessful delivery packages for
              managers
            </p>
          </div>

         </div>

        </List.Item>
      )}
    />
  </div>
);

export default Experiences;
