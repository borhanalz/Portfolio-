"use client";
import React from "react";
import { List } from "antd";
import Image from "next/image";
import tipaxLogo from "Assets/Images/tipax-logo.png";
import rmtoLogo from "Assets/Images/RMTO_Logo.png";
import saminLogo from "Assets/Images/samin.jpg";
import { differenceInMonths } from "date-fns";

const Experiences: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      logo: tipaxLogo,
      jobTitle: "Front-End Developer",
      companyTitle: "Tipaxco/تیپاکس , Freelance",
      startedDate: "2023/07/10",
      endDate: "present",
      location: "Tehran , Tehran Province Iran . Remote",
      description: `Front-end development of internal and external websites of
 the company. - Construction of a panel for the
 organization's price engineering, which has sections for
 calculating the price of logistics transfers. - Creating a
 promotion panel to register various events and register a
 discount code for each event for the organization's
 representatives across the country - Building a tracking
 website to track the shipment - Creating a website to change
 the user's destination address for delivery - Creating a
 heatmap to view successful and unsuccessful delivery
 packages for managers`,
    },
    {
      id: 2,
      logo: rmtoLogo,
      jobTitle: "Front-End Developer",
      companyTitle:
        "Iran Road Maintenance & Transportation Organization, Freelance",
      startedDate: "2024/02/10",
      endDate: "present",
      location: "Tehran , Tehran Province Iran . Remote",
      description: `Creating a user management panel for the passenger fleet development system of Iran Road Organization`,
    },
    {
      id: 3,
      logo: saminLogo,
      jobTitle: "Front-End Developer",
      companyTitle: "Fanavaran Pishro Samin, FullTime",
      startedDate: "2023/07/05",
      endDate: "present",
      location: "Tehran , Tehran Province Iran . Remote",
      description: `Creating a Logestic Softwares For Companies Which Work On Field Of Logestic`,
    },
    {
      id: 4,
      logo: tipaxLogo,
      jobTitle: "Front-End Developer",
      companyTitle: "Freelance",
      startedDate: "2022/11/12",
      endDate: "2023/04/12",
      location: "Tehran , Tehran Province Iran . Remote",
      description: `Carrying out personal projects( Freelance )`,
    },
  ];
  const now = new Date();

  return (
    <div className="mt-10">
      <div className="mt-20 mb-10">
        <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
          Experiences
        </p>
      </div>
      <List
        dataSource={experienceData}
        renderItem={(item) => {
          return (
            <List.Item>
              <div className="mt-10">
                <div className="inline-block">
                  <Image src={item.logo} alt="tipax" className="w-20" />
                </div>
                <div>
                  <div className="space-y-2">
                    <h2 className="text-xl text-customColors-primaryTwo">
                      {item.jobTitle}
                    </h2>
                    <p className="text-sm">{item.companyTitle}</p>
                    <p className="text-sm">{`${item.startedDate}-${
                      item.endDate
                    }, ${
                      differenceInMonths(
                        item.endDate == "present" ? now : item.endDate,
                        item.startedDate
                      ) + 1
                    } Mos`}</p>
                    <p className="text-xs">{item.location}</p>
                    <p className="text-sm text-left">- {item.description}</p>
                  </div>
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default Experiences;
