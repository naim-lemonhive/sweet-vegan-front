import React from "react"
import "./description.css"

export const Description = ({ text, textAlign }) => {
  return (
    <div style={{textAlign: textAlign? textAlign: ''}} className="description">
      {text}
    </div>
  )
}
