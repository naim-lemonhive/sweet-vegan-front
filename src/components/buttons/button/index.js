import React from "react"

export const Button = ({ text, color, background }) => {
  return (
    <button
      style={{
        color: color ? color : "#FE7968",
        border: 'none',
        outline: "none",
        padding: "10px 35px",
        textTransform: "uppercase",
        fontFamily: "Source Sans Pro,sans-serif",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "30px",
        backgroundColor: background ? background : "#ffffff",
      }}
    >
      {text}
    </button>
  )
}
