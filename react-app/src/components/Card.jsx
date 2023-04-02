import React from "react"

export default function Card(props) {
    const{ img, ratingScore, ratingCount, location, text, cost } = props
    return (
        <div className="card">
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{ratingScore}</span>
                <span className="gray">{ratingCount} </span>
                <span className="gray">{location}</span>
            </div>
            <p>{text}</p>
            <p><span className="bold">{cost}</span> / person</p>
        </div>
    )
}
