import React from "react";

export default function Image(props) {
  const { source, alt, size, className, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ width: size, display: "flex", alignItems: "center" }}
      className={className}
    >
      <img src={source} alt={alt} style={{ width: "100%", zIndex: 2 }} />
    </div>
  );
}
