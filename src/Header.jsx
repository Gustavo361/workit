import React from 'react'

import Navbar from './Navbar'
import Button from './Button'
import ImageBox from './ImageBox'

import imageHero from './assets/images/image-hero.webp'

import './css/mobile/header.css'
import './css/tablet/header.css'
import './css/desktop/header.css'

export default function Header() {
    return (
        <header>
            <Navbar />
            <h1>Data <span>tailored</span> to your needs.</h1>
            <Button text='Learn more' />
            <ImageBox src={imageHero} />
            <div className="custom-shape-divider-bottom-1682795130">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
        </header>
    )
}