import React from 'react';
import { OutlineButton } from '../../buttons/outlineButton';
import { Description } from '../../typography/description';
import { Title } from '../../typography/title';
import './storySection.css';

export const StorySection = () => {
  return (
    <div className="story_section">
      <div style={{ backgroundColor: "#FEF4F8" }}></div>
      <div style={{ backgroundColor: "#FE7968" }}></div>
      <div className="section_body">
        <div className="container">
          <div className="image_container">
            <div className="story_content">
              <Title text="Our Story" color="#FE7968" size="48px" />
              <Description
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
 Doloremque dignissimos eaque perspiciatis ducimus minus
  qui quisquam sit, esse magni nobis porro cupiditate
   corrupti reprehenderit. Aut praesentium nam asperiores
    aspernatur reiciendis."
                textAlign="justify"
              />
              <div className='story_content_btn'>
                <OutlineButton text="Read more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}