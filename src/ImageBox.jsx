import React from 'react'

import './css/mobile/image-box.css'
import './css/tablet/image-box.css'
import './css/desktop/image-box.css'

export default function ImageBox(props) {
    return (
    <div id='image-box'>
        <img src={props.src} alt="" />
    </div>
    )
}