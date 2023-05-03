import React from 'react';
import { InnerHeader } from '../Headers';
import Card from '../GlobalCard';
import Image from 'next/image';
import CurrencyBtn from '../CurrencyBtn';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Calendar from '../Calendar';

const DashboardRightbar = () => {
  return (
    <div>
      <InnerHeader>Overview</InnerHeader>
      <Card cls="px-6 py-6">
        <h2 className="text-lg font-bold ">27 May 2023</h2>
        <p className=" text-[#82858E] text-sm">Next payment date</p>
        <RightbarText text1="Tasks Waiting" text2="3" />
        <div className="flexs gap-2 text-blue-400">
          <a href="/">View all Tasks </a>
          <AiOutlineArrowRight />
        </div>
        <h2 className=" text-[#7D7D7D] mt-4">Payments Waiting</h2>
        <RightbarText text1="Member Units" text2="3 Units" />
        <RightbarText
          text1="Total Amount Pending"
          text2="233,254"
          currencyBtn
        />
      </Card>
      <InnerHeader>Calendar</InnerHeader>
      <Calendar />
    </div>
  );
};

export default DashboardRightbar;
export const RightbarText = ({ text1, text2, currencyBtn }: any) => {
  return (
    <div className="flex items-center py-2 gap-x-2">
      {/* <div className=" w-1 h-10 bg-[#4318FF] rounded-lg"></div> */}
      <div className="border-l-4 border-blue-600">
        <div className="flex items-center justify-between gap-2">
          <h3 className="ml-3 text-sm font-semibold">{text1}</h3>
          {currencyBtn && <CurrencyBtn />}
        </div>
        <p className="text-[#82858E] text-sm ml-3">{text2}</p>
      </div>
    </div>
  );
};

const Transactions = ({ icon, title1, title2, title3, title4, color }: any) => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center gap-3">
        <Image src={icon} width={28} height={28} alt="img" />
        <div>
          <p className=" text-[16px] text-[#000] font-semibold">{title1}</p>
          <p className=" text-[13px] text-[#A3AED0]">{title2}</p>
        </div>
      </div>
      <div className={`${color}`}>
        <p className=" text-[16px]">{title3}</p>
        <p className=" text-[13px] flex justify-end">{title4}</p>
      </div>
    </div>
  );
};
