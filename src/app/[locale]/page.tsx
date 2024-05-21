import Image from "next/image";
import myImage from 'Assets/Images/BorhanAlizadehImg.jpg'
import SkillsSlider from "Components/SkillsSlider/SkillsSlider";
import AboutMe from "Components/AboutMe/AboutMe";
import Works from "Components/Works/Works";
import Experiences from "Components/Experiences/Experiences";
import { Button, Modal } from "antd";
import Defination from "Components/_core/UI/LangSwitch/Defination/Defination";
import Link from "next/link";

export default function Home() {
  return <div>
    <div className="flex justify-around mt-10">
    <div className="mt-5 mb-20 text-center space-y-10">
      <Image src={myImage} alt="BorhanAlizdeh" className="w-36 sm:w-64 md:w-72 inline-block rounded-full"/>
     <Defination/>
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
