import React from 'react';
import { Description } from '../../typography/description';
import { Title } from '../../typography/title';
import BoxHeroSection from '../heroSectionBox';
import './speciality.css';
const info = {
  title: "What makes our sweet so special?",
  description:
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Justo, pharetra egestas in massa faucibus vitae. 
     Blandit porttitor quam tortor lacus. 
     Justo, pharetra egestas in massa faucibus vitae. 
     Blandit porttitor quam tortor lacus. 
     Euismod cursus gravida semper.`,
}
export const Speciality = () => {
  return (
    <div className="speciality_section">
      <div className="container">
        <div className="speciality_header">
          <Title text={info.title} color="#FE7968" />
          <Description text={info.description} />
        </div>
        <div className="specialty_body">
          <div className="body_left">
            <div className="body_left_svg">
              <svg
                width="426"
                height="400"
                viewBox="0 0 426 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M249.702 397.832C304.322 392.368 362.928 382.737 397.087 339.762C431.154 296.903 429.638 237.361 420.108 183.445C411.281 133.503 385.65 89.5178 347.044 56.6355C307.098 22.6122 258.067 -6.31876 206.14 1.20016C155.328 8.55777 124.858 55.6704 90.4564 93.7891C52.5761 135.763 -1.08436 173.065 0.0166753 229.598C1.16311 288.461 47.0131 336.999 95.8338 369.894C140.777 400.176 195.781 403.225 249.702 397.832Z"
                  fill="#FE7968"
                />
              </svg>
            </div>
            <div className="body_left_box">
              <BoxHeroSection size={{ width: "280px", height: "375px" }} />
            </div>
          </div>
          <div className="body_right">
            <Title text="Ingredients" color="#4F4F4F" size="40px" />
            <Description text={info.description} textAlign="justify" />
            <ul>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum dolor</li>
              <li>Lorem ipsum</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
