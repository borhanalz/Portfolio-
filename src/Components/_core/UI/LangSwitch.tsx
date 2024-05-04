"use client";
import { Select } from "antd";
import Image from "next/image";
import React from "react";
import type { SelectProps } from "antd";
import iranFlag from "Assets/Images/Flag_of_Iran.svg.png";
import EngFlag from "Assets/Images/Flag_of_the_United_Kingdom_(1-2).svg";
import { usePathname, useRouter } from "next/navigation";

const LangSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const items: SelectProps["options"] = [
    {
      value: "/en",
      label: (
        <div className="text-white flex justify-between">
          <Image alt="Eng Flag" src={EngFlag} className="w-10" />
          <p>EN</p>
        </div>
      ),
    },
    {
      value: "/fa",
      label: (
        <div className="flex text-white justify-between">
          <Image alt="Iran Flag" src={iranFlag} className="w-10" />
          <p>Fa</p>
        </div>
      ),
    },
  ];
  return (
    <Select
      defaultValue={pathname}
      options={items}
      className="w-32"
      rootClassName="bg-transparent"
      onChange={(e, n) => router.replace(e)}
    />
  );
};

export default LangSwitch;
