import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
        Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Experience the power of AI with our cutting-edge technology. From automation to decision making, we provide solutions for all your business needs. Revolutionize your operations today!</p>
      
        <div className='gpt3__header-content__input'>
        <input type="email" placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
