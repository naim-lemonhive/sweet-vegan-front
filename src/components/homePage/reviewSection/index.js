import React from 'react';
import { ReviewCard } from '../../cards/reviewCard';
import { Title } from '../../typography/title';
import './reviewSection.css';

export const ReviewSection = () => {
  return (
    <div className="container">
      <div className="review_section_container">
        <div className='review_section_left'>
          <Title text={"OUR CUSTOMER"} color="#FE7968" size={"24px"} />
          <Title text={"Don’t take it from us.Take it from them."} color="#333333" size={"60px"} />
        </div>
        <ul className="review_cards_container">
          <li>
            <ReviewCard user={{ name: "Durjoy Talukdar" }} />
          </li>
          <li>
            <ReviewCard user={{ name: "Durjoy Talukdar" }} />
          </li>
          <li>
            <ReviewCard user={{ name: "Durjoy Talukdar" }} />
          </li>
        </ul>
      </div>
    </div>
  )
};
