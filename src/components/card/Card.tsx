import React from 'react';
import './card.scss';
import Arrow from '../../data/static_assets/arrow.png'

export function Card(props: any) {
    const { cardData } = props;
    const { id, name = '', images, day_pass_price, day_pass_discounts_percentage } = cardData || {};
    const [img1] = images;
    const { value: value1 = 0 } = day_pass_discounts_percentage["1"] || {}
    const { value: value2 = 0 } = day_pass_discounts_percentage["10"] || {}

  return (
    <div className='card-wrapper' key={id}>
        <h2>{name}</h2>
        <div className='card-img-container'><img src={img1} alt={`${name} image`} /></div>
        <div className='pass-card-wrapper'>
          <div className='pass-left'>
            <div className='pass-left-txt'>Day Pass</div>
            <div><span>₹</span>{day_pass_price}</div>
            <div className='arrow'><img src={Arrow} alt="arrow"/></div>
            {value1 ? <div className='discount'>{`${value1}% Discount`}</div> : null}
          </div>
          <div className='pass-right'>
            <div className='pass-right-txt'>Bulk Pass</div>
            <div><span>₹</span>{day_pass_price}</div>
            <div className='arrow'><img src={Arrow} alt="arrow"/></div>
            {value2 ? <div className='discount'>{`${value2}% Discount`}</div> : null}
          </div>
        </div>
    </div>
  )
}

