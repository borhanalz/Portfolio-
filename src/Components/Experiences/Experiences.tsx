"use client";
import React from "react";
import type { StepsProps } from "antd";
import { Avatar, Divider, List, Popover, Steps } from "antd";
import Image from "next/image";
import tipaxLogo from "Assets/Images/tipax-logo.png";
import { BiCircle, BiUserCheck } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";
import { MdWork } from "react-icons/md";

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
const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {index==3?<MdWork color="white" size={30} className="mr-20"/>:<BiCircle/>}
  </Popover>
);
const Experiences: React.FC = () => (
  <div className="mt-10">
    <div className="my-20">
      <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
        Experiences
      </p>
    </div>
    <Steps
      direction="vertical"
      progressDot={customDot}
      items={[
        {
          title: (
            <div className="mt-10">
              <div className="flex bg-zinc-800 custom_shadow shadow-black p-5">
                <Image src={tipaxLogo} alt="tipax" className="w-28 h-32 mt-8" />
                <div className="text-white space-y-2 mx-5">
                  <h2 className="text-xl">Front-End Developer</h2>
                  <p className="text-sm">Tipaxco/تیپاکس , Freelance</p>
                  <p className="text-xs">Jul 2023 - Present , 11mos</p>
                  <p className="text-xs">Tehran , Tehran Province Iran . Remote</p>
                  <p className="text-sm">{`
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
          ),
          status: "finish",
        },
        {
          title: (
            <div className="mt-10">
              <div className="flex shadow-xl shadow-black border border-gray-950 rounded-2xl p-5">
                <Image src={tipaxLogo} alt="tipax" className="w-28 h-32 mt-8" />
                <div className="text-white space-y-2 mx-5">
                  <h2 className="text-xl">Front-End Developer</h2>
                  <p className="text-sm">Tipaxco/تیپاکس , Freelance</p>
                  <p className="text-xs">Jul 2023 - Present , 11mos</p>
                  <p className="text-xs">Tehran , Tehran Province Iran . Remote</p>
                  <p className="text-sm">{`
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
          ),
          status: "finish",
        },
        {
          title: (
            <div className="mt-10">
              <div className="flex shadow-xl shadow-black border border-gray-950 rounded-2xl p-5">
                <Image src={tipaxLogo} alt="tipax" className="w-28 h-32 mt-8" />
                <div className="text-white space-y-2 mx-5">
                  <h2 className="text-xl">Front-End Developer</h2>
                  <p className="text-sm">Tipaxco/تیپاکس , Freelance</p>
                  <p className="text-xs">Jul 2023 - Present , 11mos</p>
                  <p className="text-xs">Tehran , Tehran Province Iran . Remote</p>
                  <p className="text-sm">{`
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
          ),
          status: "finish",
        },{ title:'',status: "finish",
        }
      ]}
    />
  </div>
);

export default Experiences;
