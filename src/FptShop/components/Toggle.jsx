import React, { useState } from "react";
// // stateless functional component : component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"> </div>;
// }

// // stateful functional component : component có sử dụng state
// function Toggle2() {
//   // const [count,setCount] =useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  // 1. enabling state: useState( initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state
  // 4. update state
  // initialize value : boolean(true,false), number(1,2,3,4), string("Evondev"), undefined, null, [1,2,3,4], {title: "Frontend Developer"}
  const [on, setOn] = useState(false);
  console.log(on);

  const handleToggle = () => {
    // setOn(callback) ---> setOn(prevState => ! prevState)
    // khi ta nhấn vào là false thì sẽ lấy giá trị trước đó là true
    setOn((on) => !on);
  };
  return (
    // <div className="toggle" onClick={() => setOn(true)}>
    //   Toggle {on ? "On" : "Off"}
    // </div>

    <div className="absolute top-[90px] left-[50px]">
      <div
        className={`toggle ${on ? "active && class" : ""} `}
        onClick={handleToggle}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      {/* {on ? "On" : "Off"} */}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          {" "}
          On{" "}
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          {" "}
          Off{" "}
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
