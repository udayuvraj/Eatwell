import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { urlFor } from '../lib/client';

const AboutUs = () => {
    return (
        <div className="footer-banner-containerr">
            <div className="banner-content">
                <div className="about-us">
                    <h2 className="about-us-head">About Us</h2>
                    <p className="about-us-main">At Eat Well, we're passionate about providing gym enthusiasts with a delectable selection of nutritious options, meticulously curated to support your fitness goals and keep you performing at your best!</p>
                </div>
                <div className='foot-banner'>
                    <div className="banner-descc">
                        <div className="left m-5 foot-logo">

                            <Link href="/"><img src="/favicon.ico" alt="eatwell" width="100" height="100" /></Link>
                        </div>
                        <div className="left m-5 location">
                            <div className='weightt'>
                                Currently we are Located at:
                            </div>
                            <div>
                                In Hyderabad:
                            </div>
                            <div>
                                Kompally
                            </div>
                            <div>
                                Pragathinagar
                            </div>
                            <div>
                                Madinaguda
                            </div>
                            <div>
                                Begumpet
                            </div>
                        </div>
                        <div className="left m-5 contact">
                            <div className='weightt'>
                                Contact us:
                            </div>
                            <div>
                                +91 8184850111
                            </div>
                            <div>
                                +91 8790805543
                            </div>
                        </div>
                        <div className="right m-5 social">
                            <div className='weightt'>For Any queries:</div>
                            <div>
                                <a href='https://wa.me/8184850111?text=I%20want%20%to%order.' target='_blank'>
                                    <AiOutlineWhatsApp /> Whatsapp
                                </a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/eatw.ell9" target='_blank'>
                                    <AiOutlineInstagram /> Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='footer-container'>
                    <p>Copyright © 2024 EatWell. All Rights Reserved.</p>
                    <p className='footer-cont'>Follow us on
                        <p className="icons">
                            <a href="https://www.instagram.com/eatw.ell9" target='_blank'><AiOutlineInstagram /></a>
                        </p>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default AboutUs;
