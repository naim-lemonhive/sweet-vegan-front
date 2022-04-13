import React from "react"
import { Button } from "../buttons/button"
import { Title } from "../typography/title"
import "./newsLetter.css"

export const NewsLetter = () => {
  return (
    <div className="news_letter_container">
      <div className="container">
        <div className="news_letter_title">
          <Title
            text={"Sign up for our newsletter to get up-to-date from us"}
            size="48px"
            color={"#ffffff"}
          />
        </div>
        <div className="newsletter_input_container">
          <input className="newsletter_input" placeholder="Enter your email" />
          <div className="newsletter_btn">
            <Button text={"Sign up"} background="#fe7968" color={"#ffffff"} />
          </div>
        </div>
      </div>
    </div>
  )
}
