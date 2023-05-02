import React from 'react'

import Button from './Button'

import './css/mobile/apply-card.css'
import './css/mobile/button.css'

export default function AppyCard(props) {
    return (
        <article className="apply-card">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <Button text='Apply for access'/>
        </article>
    )
}