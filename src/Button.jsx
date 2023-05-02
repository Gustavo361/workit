import React from 'react'

import './css/mobile/button.css'

export default function Button(props) {
    return (
        <button>
            {props.text}
        </button>
    )
}