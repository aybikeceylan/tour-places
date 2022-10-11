import React from 'react'
import CardStyle from "./card.module.css"

const Card = ({ title, url, desc }) => {
    return (
        <div className={CardStyle["container"]}>
            <div className={CardStyle["title"]}>{title}</div>
            <div className={CardStyle["image"]}>
                <img src={url} alt="img" />
                <div className={CardStyle["desc"]}>{desc}</div>
            </div>
        </div>
    )
}

export default Card