"use client";
import { useGSAP } from "@gsap/react";
import { Button, Divider } from "antd";
import React, { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import myImage from "Assets/Images/BorhanAlizadehImg.png";

const AboutMe = () => {
  return (
    <div className="mt-32">
      <div className="my-20">
        <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
          About Me
        </p>
      </div>

      <div className="text-sm mt-10">
      <div>
          <p
            style={{
              wordSpacing: "3px",
              lineHeight: "35px",
              textAlign: "justify",
            }}
          >
           {` Hey, I'm Borhan Alizadeh, and I've been navigating the programming
            realm for three years now. You'll often find me knee-deep in
            React.js and Next.js, meticulously ensuring that every pixel is in
            its place and every function runs seamlessly. As a Front-End
            Developer, I'm all about crafting user experiences that not only
            dazzle but also empower. I thrive on optimizing user interaction and
            refining interfaces to perfection. My knack for leveraging these
            technologies effectively enables me to whip up web applications that
            are not just robust and scalable but also visually captivating. Now,
            let's talk tech. I've got a diverse arsenal of front-end
            technologies under my belt, from the basics like HTML5, CSS3, and
            JavaScript/TypeScript, to the more intricate tools like
            ReduxToolkit, React Query, React-Router, and Axios for managing both
            client-side and server-side states. When it comes to UI design and
            data visualization, I'm fluent in Tailwind, React Bootstrap, MUI,
            and AntDesign. And let's not forget about those charting libraries –
            Recharts and HighChart? Yep, I've got those covered too. But it
            doesn't stop there. I've dabbled in a slew of other pertinent
            technologies beyond the realm of front-end development. I'm all
            about diving headfirst into projects that value innovation,
            user-centric design, and efficient engineering practices. It's where
            I feel most at home, using my skills and experience to make
            meaningful contributions. What sets me apart? It's my holistic
            perspective. I understand how front-end components fit into the
            bigger picture of web development, allowing me to tackle problems
            with clarity and insight.`}
          </p>
          <div className="text-center mt-5">
            <Button className="bg-customColors-primaryTwo w-44"><a href='/assets/cv.pdf' download={'borhan_alizadeh.pdf'}>Download CV</a></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
