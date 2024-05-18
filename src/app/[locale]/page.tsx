import Image from "next/image";
import myImage from 'Assets/Images/BorhanAlizadehImg.jpg'
import SkillsSlider from "Components/SkillsSlider/SkillsSlider";
import AboutMe from "Components/AboutMe/AboutMe";
import Works from "Components/Works/Works";
import Experiences from "Components/Experiences/Experiences";
import { Button } from "antd";

export default function Home() {
  return <div>
    <div className="flex justify-around mt-10">
    <div className="mt-5 mb-20 text-center space-y-10">
      <Image src={myImage} alt="BorhanAlizdeh" className="w-36 sm:w-64 md:w-72 inline-block rounded-full"/>
      <div className="font-extrabold text-2xl lg:text-7xl space-y-10">
        <h1 className="text-customColors-primaryTwo">Hello ، Im Borhan Alizadeh</h1>
        <h2>Front-End Developer Based In Iran</h2>
      </div>
      <div className="space-x-5">
        <button className="bg-transparent border p-5 rounded-3xl text-white">Start Cooperation</button>
        <button className="bg-transparent border p-5 rounded-3xl text-white">View All Works</button>
      </div>
    </div>
  </div>
  <SkillsSlider/>
  <AboutMe/>
  <Works/>
  <Experiences/>
  </div>
}
