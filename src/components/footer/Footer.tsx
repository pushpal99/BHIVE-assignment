import React from 'react';
import PlayStore from '../../data/static_assets/playstore.png';
import AppStore from '../../data/static_assets/appstore.png';
import CompPhone from '../../data/static_assets/company_footer.png';
import './footer.scss'
import { SITE_TEXT } from '../../app/constants';

export function Footer() {
  const { FOOTER_HEAD, COPYRIGHT_TXT, AD_TXT } = SITE_TEXT;
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <h2>{FOOTER_HEAD}</h2>
            <div className='footer-box'>
                <div className='footer-img'>
                    <img src={CompPhone} alt="footer-img"/>
                </div>
                <div className='infoTxt'>
                    <div>{AD_TXT}</div>
                </div>
                <div className='app-store-icon-container'>
                        <span><img src={PlayStore} alt="play store"/></span>
                        <span><img src={AppStore} alt="app store"/></span>
                    </div>
            </div>
        </div>

      <div className='copyright-section'>
            {COPYRIGHT_TXT}
      </div>
    </div>
  )
}

