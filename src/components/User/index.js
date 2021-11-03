import React from 'react'
import './style.css'
const User = () => {
    return (
        <div className="grand">
            <div className="userBox">
            <h1>Enter Your name</h1>
            <form>
                <input id="textField" type= "text" name="userName" />
                <button className="enterBtn">Start</button>
            </form>
            </div>
        </div>
    )
}

export default User
