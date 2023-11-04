import  React from 'react';
import './roomGame.css'

export const RoomGame=()=>{
    return(
        <div className="room">
            <div className="container-room">
                <label className='eti' placeholder='id de la sala'>Escribe el  codigo de la sala </label>
                <input className='sala'/>
                <button className='join'>Join Game room</button>
            </div>
        </div>
    )
}