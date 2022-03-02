import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, setShow, nodeRef: dropdownRef1 } = useClickOutside();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    // console.log(nodeRef.current.getBoundingClientRect());
    setCoords(dropdownRef1.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef1}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleClick}
      >
        {" "}
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY, // xu ly cho ca khi scroll
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer"> Javascript </div>
      <div className="p-5 cursor-pointer"> ReactJS </div>
      <div className="p-5 cursor-pointer"> VueJS </div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
