import React from "react";

export default function Block({
  number,
  Icon,
  title,
}: {
  number: React.ReactNode;
  Icon: React.ReactNode;
  title?: React.ReactNode;
}) {
  return (
    <div className="bg-[#0d142f] w-full my-2 max-[666px]:w-full lg:text-[20px] md:text-[18px] sm:text-[14px] border-[1px] flex-col flex align-middle">
      <div className="justify-start text-start items-start flex mx-2">
        {number}
      </div>
      <div className=" flex flex-col h-full">
        <div className="items-center w-full justify-start top-0 flex flex-col text-center align-top">
          {Icon}
        </div>
        <div className="flex justify-center w-full ">
          <p className=" text-center mx-2">{title}</p>
        </div>
      </div>
    </div>
  );
}
