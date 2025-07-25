import * as React from "react";
const EyesSquint = (props) => (
  <svg
    viewBox="0 0 112 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={30} cy={20.7271} rx={14} ry={7.72708} fill="white" />
    <mask
      id="mask0_0_563"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={16}
      y={13}
      width={28}
      height={16}
    >
      <ellipse cx={30} cy={20.7271} rx={14} ry={7.72708} fill="white" />
    </mask>
    <g mask="url(#mask0_0_563)">
      <circle cx={30} cy={23} r={6} fill="black" fillOpacity={0.7} />
    </g>
    <ellipse cx={82} cy={20.7271} rx={14} ry={7.72708} fill="white" />
    <mask
      id="mask1_0_563"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={68}
      y={13}
      width={28}
      height={16}
    >
      <ellipse cx={82} cy={20.7271} rx={14} ry={7.72708} fill="white" />
    </mask>
    <g mask="url(#mask1_0_563)">
      <circle cx={82} cy={23} r={6} fill="black" fillOpacity={0.7} />
    </g>
  </svg>
);
export default EyesSquint;
