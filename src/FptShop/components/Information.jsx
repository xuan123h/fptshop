import React from "react";

const Information = ({ information }) => {
  return (
    <div className=" ">
      <div className="">
        <div className="w-[95px] h-[95px] border border-white bg-gray-100 rounded-full ml-[14px] ">
          <img
            src={information.thumbnailUrl}
            alt={information.name}
            className="w-[60px] h-[60px]  object-cover absolute  left-[60px] top-[50px]"
          />
        </div>
        <li className="text-center top-[135px] absolute left-[0px] w-[200px] text-[14px] text-orange-500 font-bold">
          {" "}
          {information.name}{" "}
        </li>
      </div>
    </div>
  );
};

export default Information;
