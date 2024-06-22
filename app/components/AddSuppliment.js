'use client';
import '../styles/stepthree.css';
import '../styles/form.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import React, { useState } from 'react';


const StepThreeCard = ({ imgSrc, title, price, desc, addToCart, handleOrignalStep }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleAddToCart = () => {
      if (quantity > 0) {
        const item = {
          imgSrc: imgSrc,
          title: title,
          price: price,
          desc: desc,
          quantity: quantity,
        };
        addToCart(item); // Notify parent component (StepThree) about the added item
        handleOrignalStep(); // Proceed to the next step
      } else {
        console.log('Quantity should be greater than zero to add to cart.');
        // Optionally, you could display an error message or alert the user.
      }
    };
  
    return (
      <div className='card card-suppliment' onClick={handleAddToCart}>
        <div className='card-top'>
          <div className='card-img'>
            <img src={imgSrc} alt={title} />
          </div>
          <div className='card-title-price title-price-stepthree'>
            <h3>{title}</h3>
            <div className='price-desc'>
              <h3>{price}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };


const StepThree = ({handleOrignalStep, handleChange, values, cartitem }) => {
  const [cart, setCart] = useState([]);
  const { t } = useTranslation(); // Initialize useTranslation hook

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
    cartitem(item)
    console.log('Cart:', [...cart, item]); // Log the updated cart for debugging
  };

  const cardsData = [
    {
      imgSrc: "/assets/med1.svg",
      title: t('stepThree.product1.title'), // Translate title using t function
      price: "$889.99",
      desc: t('stepThree.product1.description'), // Translate description using t function
    },
    {
      imgSrc: "/assets/med2.svg",
      title: t('stepThree.product2.title'), // Translate title using t function
      price: "$889.99",
      savings: "$360",
      desc: t('stepThree.product2.description'), // Translate description using t function
    },
    {
      imgSrc: "/assets/med2.svg",
      title: t('stepThree.product3.title'), // Translate title using t function
      price: "$889.99",
      desc: t('stepThree.product3.description'), // Translate description using t function
    },
  ];

  return (
    <div className="formContainer step-form">
      <div className="title-info">
        <h2>{t('stepThree.title')}</h2> {/* Translate title using t function */}
      </div>
      {cardsData.map((card, index) => (
        <StepThreeCard
          key={index}
          {...card}
          addToCart={addToCart}
          handleOrignalStep={handleOrignalStep}
        />
      ))}

      <div className='btn-group btn-group-stepthree'>
        <button className='back-btn back-btn-stepthree' onClick={handleOrignalStep}>
          <img src="/assets/arrow.svg" alt="arrow" /> {t('stepThree.back')}
        </button>
        <div className='forward-btns'>
          <button className='long-btn long-btn-stepthree' onClick={handleOrignalStep}>{t('stepFour.continueJourney')}</button> {/* Translate Skip button using t function */}
        </div>
      </div>

      <div className='review-inline review-md review-stepthree'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p className='reviews'>456 <span>{t('review.reviewsOn')}</span></p> {/* Translate reviewsOn using t function */}
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> <span>Trustpilot</span>
        </div>
      </div>

      <div className='review review-sm'>
        <h3>{t('review.excellent')}</h3> {/* Translate Excellent using t function */}
        <div className='stars'>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
          <img src="/assets/star.png" alt="star"/>
        </div>
        <p>{t('review.basedOn')} <b>456 {t('review.reviews')}</b></p>
        <div className='trustpilot'>
          <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
      </div>
    </div>
  );
};

export default StepThree;
