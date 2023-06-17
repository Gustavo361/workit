import React from 'react'

import './css/mobile/card.css'
import './css/tablet/card.css'
import './css/desktop/card.css'

export default function Card({ cardNumber, title, paragraph }) {
    return (
        <article className="card">
            <div className='card-number-container'>{cardNumber}</div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>{paragraph}</p>
            </div>
        </article>
    )
}