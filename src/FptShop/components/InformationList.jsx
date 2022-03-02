import React from "react";
import Information from "./Information";

const InformationList = ({ informationList }) => {
  return (
    <ul className="h-[325px] mt-[100px] flex items-center ml-[301px] flex-wrap w-[1400px] relative">
      {informationList.map((information) => (
        <li
          key={information.id}
          className="text-[#0168FA] w-[198px] h-[180px] p-8 border border-white bg-white border-r-indigo-100 ml-5 mb-5 relative rounded-xl"
        >
          <Information information={information} />
        </li>
      ))}
    </ul>
  );
};
export default InformationList;
