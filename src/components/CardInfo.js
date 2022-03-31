import React from 'react'
import './CardInfo.css'

const CardInfo = (props) => {
    // Destructuring the props
    const { title, p1, p2, p3, p4, img1_title, img1_url } = props
    return (
        <div className='container card-display'>
            <h1>{title}</h1>
            <p>{p1}</p>
            <p>{p2}</p>
            <h2>{img1_title}</h2>
            <img src={img1_url}></img>
            <p>{p3}</p>
            <p>{p4}</p>
        </div>
    )
}

export default CardInfo