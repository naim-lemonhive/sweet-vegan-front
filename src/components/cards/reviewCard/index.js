import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Description } from "../../typography/description"
import { Title } from '../../typography/title';

import './reviewCard.css'
export const ReviewCard = ({user, review}) => {
  return (
    <div className="review_card_container">
      <div className="profile_img">
        <StaticImage
          style={{ borderRadius: "100%", border: "2px solid #ffffff" }}
          src={
            "https://i.pinimg.com/736x/66/03/58/660358db389c0e793bd234d928b909c4.jpg"
          }
          alt="profile image"
          width={60}
          height={60}
        />
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="review_card_content">
        <Description
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, consectetur nibh arcu feugiat. Egestas feugiat diam imperdiet."
          textAlign="justify"
        />
        <Title text={user.name} color={"#333333"} size="18px" />
        <p className="user_profession">
            Software Engineer
        </p>
      </div>
    </div>
  )
}
