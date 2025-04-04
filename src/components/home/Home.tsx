import React from 'react';
import './home.scss'
import { SITE_TEXT, AVAILABLE_FACILITY } from '../../app/constants';
import { useAppSelector } from '../../app/hook';
import { Card } from '../card/Card';

export function Home() {
  const { HEAD_1, RS_TXT, FACILITY_HEAD, SPACE_HEAD } = SITE_TEXT;
  const spaceData = useAppSelector(state => state.main.ourSpace);

  return (
    <div className='home-wrapper'>
        <div className='hero-container'>
            <div className='video-container'>
                <div className='yellow-bg-container'/>
            </div>
            <div className='header-container'>
                <h1>{HEAD_1} <span>{RS_TXT}</span></h1>
            </div>
        </div>
        <div className='facility-card-container'>
            <h1>{FACILITY_HEAD}</h1>
            <div className='card-container'>
                {
                    AVAILABLE_FACILITY.map(({ imgSrc = '', title = ''}, i) => {
                        return (
                            <div key={title + i} className='card-wrap'>
                                <span><img src={imgSrc} alt={`${title} image`} /></span>
                                <span>{title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='spaces-card-container'>
            <h1>{SPACE_HEAD}</h1>
            <div className='card-container'>
                {
                    spaceData.map((item: any) => {
                        return (
                            <Card cardData={item} />
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

