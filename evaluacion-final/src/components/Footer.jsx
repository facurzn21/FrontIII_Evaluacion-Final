import React from 'react'
import DHimage from '../../public/images/DH.png';
import Instagramimage from '../../public/images/ico-instagram.png';
import TikTokImage from '../../public/images/ico-tiktok.png';
import FacebokImage from '../../public/images/ico-facebook.png';
import WhatsappImage from '../../public/images/ico-whatsapp.png';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by</p>
      <img src={DHimage} alt='DH' className="footer-logo" />
      <div className="footer-icons">
        <img src={Instagramimage} alt='Instagram' />
        <img src={TikTokImage} alt='TikTok' />
        <img src={FacebokImage} alt='Facebook' />
        <img src={WhatsappImage} alt='Whatsapp' />
      </div>
    </footer>
  )
}

export default Footer