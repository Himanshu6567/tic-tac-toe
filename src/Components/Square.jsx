import React from "react";
export default function Square(props) {
  let color;
  if (props.value === "O") {
    color = "text-red-600";
  } else {
    color = "text-blue-600";
  }

  return (
    <div
      className="h-16 w-16 flex justify-center items-center border-2  "
      onClick={props.onClick}
    >
      <div className={`text-2xl ${color}`}>{props.value}</div>
    </div>
  );
}
