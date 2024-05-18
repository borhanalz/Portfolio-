import Image from "next/image";
import myImage from 'Assets/Images/2023-11-29 13.10.jpg'
import SkillsSlider from "Components/SkillsSlider/SkillsSlider";
import AboutMe from "Components/AboutMe/AboutMe";
import Works from "Components/Works/Works";
import Experiences from "Components/Experiences/Experiences";

export default function Home() {
  return <div>
    <div className="flex justify-around mt-10">
    <div className="mt-5 space-y-3 sm:mt-16 md:mt-24">
      <p className="text-sm md:text-lg">Hello , Im Borhan Alizadeh</p>
      <h2 className="text-[#A6BBCC] md:text-[70px] sm:text-[35px] text-[20px] font-bold">Front-End <p>Developer</p></h2>
      <p className="underline underline-offset-4">Contact Me</p>
    </div>
    <div>
      <Image src={myImage} alt="BorhanAlizdeh" className="w-36 sm:w-64 md:w-96 rounded-3xl"/>
    </div>
  </div>
  <SkillsSlider/>
  <AboutMe/>
  <Works/>
  <Experiences/>
  </div>
}
