import React, { useState } from 'react'
import './Cards.css'

const Card = (props) => {
    const { id, title, p1 } = props
    // URL to display the cards information respectively
    let url = `../displayCards/${id}`

    return (
        <article className="single-data card">
            <footer>
                <div className="data-info">
                    <h4>{title}</h4>
                </div>
                <p>
                {p1.substring(0, 200)}. . .
                </p>
                <button
                    className="info-btn">
                    <a class="nav-link" href={url}>Read More {id}</a>
                </button>
            </footer>
        </article>
    )
}

export default Card
