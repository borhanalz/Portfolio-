'use client'
import React from 'react';
import type { StepsProps } from 'antd';
import { Avatar, Divider, List, Steps } from 'antd';
import Image from 'next/image';
import tipaxLogo from 'Assets/Images/tipax-logo.png'

const data = [
  {
    title: 'Ant Design Title 1',
    current: 0,
  },
  {
    title: 'Ant Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design Title 3',
    current: 2,
  },
  {
    title: 'Ant Design Title 4',
    current: 1,
  },
];

const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];

const Experiences: React.FC = () => (
  <div className='mt-10'>
       <Divider
        style={{ height: "60px" }}
        orientation="left"
        orientationMargin="0"
      >
        <p className="text-[50px] text-[#A6BBCC]">Experiences</p>
      </Divider>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Image src={tipaxLogo} alt='Tipax' className='w-1/5'/>}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </div>
);

export default Experiences;