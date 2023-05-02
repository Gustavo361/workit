import React from 'react'

import './css/mobile/card.css'

export default function Card({cardNumber, title, paragraph}) {
    return (
        <article className="card">
            <div className='card-number-container'>
                <div className='card-number'>{cardNumber}</div>
            </div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </article>
    )
}