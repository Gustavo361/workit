import React from 'react'

import './css/mobile/image-box.css'

export default function ImageBox(props) {
    return (
    <div id='image-box'>
        <img src={props.src} alt="" />
    </div>
    )
}