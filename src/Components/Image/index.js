import React from "react";

export default function Image(props) {
  const { source, alt, size, className } = props;
  return (
    <div style={{ width: size }} className={className}>
      <img src={source} alt={alt} style={{ width: "100%" }} />
    </div>
  );
}
