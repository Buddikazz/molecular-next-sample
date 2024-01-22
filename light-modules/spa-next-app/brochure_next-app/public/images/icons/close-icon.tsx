import React from "react";

function CloseIcon({
  className = "",
  stroke,
}: Readonly<{ className?: string; stroke?: string }>) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 6.66699L6 18.667M6 6.66699L18 18.667"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CloseIcon;
