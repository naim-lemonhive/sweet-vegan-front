import React from 'react'

export const OutlineButton = ({text, color, borderColor, background}) => {
  return (
    <button
      style={{
        color: color ? color : "#FE7968",
        borderWidth: "2px",
        borderColor: borderColor ? borderColor : "#FE7968",
        padding: "10px 35px",
        textTransform: "uppercase",
        fontFamily: "Source Sans Pro,sans-serif",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "30px",
        backgroundColor: background ? background : "transparent",
      }}
    >
      {text}
    </button>
  )
}
