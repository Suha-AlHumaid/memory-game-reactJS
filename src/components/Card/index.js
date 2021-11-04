import React from 'react'
import './style.css'

const Card=(props) =>{

    const handelClick =(elem) =>{
        props.tempImg(elem)// send choosen card to tempfunc in game component
    }

    return (
        <div className="card">      
        <img 
        src={props.elem.src} 
        onClick={(e)=>{handelClick(props.elem)}}
        className={props.elem.isSucssed ? `hideImg` : `showImg`} 
        alt=""/>
        </div>
    )
}
export default Card