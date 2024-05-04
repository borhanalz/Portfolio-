import Image from "next/image";
import myImage from 'Assets/Images/2023-11-29 13.10.jpg'

export default function Home() {
  return <div className="flex justify-around">
    <div className="mt-36">
      <p className="text-lg">Hello , Im Borhan Alizadeh</p>
      <h2 className="text-[#A6BBCC] text-[70px] font-bold">Front-End Developer</h2>
      <p className="underline">Contact Me</p>
    </div>
    <div>
      <Image src={myImage} alt="BorhanAlizdeh" className="w-96 rounded-3xl"/>
    </div>
  </div>
}
