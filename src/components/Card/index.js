import React from 'react'
import './style.css'

const Card=(props) =>{
    return (
        <div className="grand">
        <img src={props.elem.src} key={props.elem.id} className={props.elem.isSucssed ? `hideImg` : `showImg`} alt=""/>
        </div>
    )
}
export default Card