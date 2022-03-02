import React, { useState } from "react";
import Modal from "./Modal";

const ModalList = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      <li className="w-[60px] h-[60px] border border-red-500 bg-[#EE0A0A] rounded-full absolute ml-[1700px] list-none mt-[180px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          height="32px"
          width="32px"
          role="img"
          alt="Biểu tượng trò chuyện"
          className="mt-[11px] ml-[13px]"
          onClick={() => setShowModal(true)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
          ></path>
        </svg>
      </li>
    </div>
  );
};

export default ModalList;
