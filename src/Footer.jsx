import React from 'react'

import './css/mobile/footer.css'
import './css/tablet/footer.css'
import './css/desktop/footer.css'

export default function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <div id="footer-title">
                    <span>work</span><span>it</span>
                </div>
                <ul>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                </ul>
            </div>
        </footer>
    )
}