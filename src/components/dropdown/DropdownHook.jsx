import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutside from "../../hooks/useClickOutside";

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropdownLabel = "Select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const dropdownValue = useWatch({
    control,
    name: "job",
    defaultValue: "",
  });
  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value); // set lai gia tri
    setShow(false);
    setLabel(e.target.textContent); // textContent la phan o giua
  };
  const [label, setLabel] = useState(dropdownLabel);

  // reset lai dropdown
  useEffect(() => {
    if (dropdownValue === "") setLabel(dropdownLabel); // neu bang rong thi moi return
  }, [dropdownValue]);

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 cursor-pointer bg-white flex items-center
       justify-between"
        onClick={() => setShow(!show)}
      >
        <span> {label} </span>
      </div>
      <div
        className={`absolute top-full left-0 w-full  rounded-lg bg-white ${
          show ? "" : "opacity-0, invisible"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickDropdownItem}
            data-value={item.value}
          >
            {item.text}
          </div>
        ))}
        {/* <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="teacher"
        >
          {" "}
          Teacher{" "}
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="developer"
        >
          {" "}
          Developer{" "}
        </div> */}
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={handleClickDropdownItem}
          data-value="doctor"
        >
          {" "}
          Doctor{" "}
        </div>
      </div>
    </div>
  );
};

export default DropdownHook;

// import React, { useEffect, useState } from "react";
// import { useWatch } from "react-hook-form";
// import useClickOutSide from "../../hooks/useClickOutSide";

// const DropdownHook = ({
//   control,
//   setValue,
//   name,
//   data,
//   dropdownLabel = "Select your job",
// }) => {
//   const { show, setShow, nodeRef } = useClickOutSide();
//   const dropdownValue = useWatch({
//     control,
//     name: "job",
//     defaultValue: "", // default value before the render
//   });
//   console.log("dropdownValue", dropdownValue);
//   const handleClickDropdownItem = (e) => {
//     setValue(name, e.target.dataset.value);
//     setShow(false);
//     setLabel(e.target.textContent);
//   };
//   const [label, setLabel] = useState(dropdownLabel);
//   useEffect(() => {
//     if (dropdownValue === "") setLabel(dropdownLabel);
//   }, [dropdownValue]);
//   return (
//     <div className="relative" ref={nodeRef}>
//       <div
//         className="flex items-center justify-between p-5 bg-white border rounded-lg cursor-pointer border-gray100"
//         onClick={() => setShow(!show)}
//       >
//         <span>{label}</span>
//       </div>
//       <div
//         className={`absolute top-full left-0 w-full rounded-lg bg-white ${
//           show ? "" : "opacity-0 invisible"
//         }`}
//       >
//         {data.map((item) => (
//           <div
//             className="p-5 cursor-pointer hover:bg-gray-100"
//             onClick={handleClickDropdownItem}
//             data-value={item.value}
//             key={item.id}
//           >
//             {item.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DropdownHook;
