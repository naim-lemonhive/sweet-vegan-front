import React from "react"
import './title.css'

export const Title = ({ text, color, size }) => {
  return (
    <div
      className="title"
      style={{
        color: color ? color : "#4F4F4F",
        fontSize: size ? size : "60px"
      }}
    >
      {text}
    </div>
  )
}
