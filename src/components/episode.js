import React from "react"; 
import {H3} from './';

export default ({tag, title, time, duration}) => 
    <div className="episode__block">
        <div className="episode__img">
            <div className="episode__tag">{tag}</div>
        </div>
        <div className="episode__info">
            <H3 type="episode__title" content={title}/>
            <div className="episode__time">{time}</div>
            <div className="episode__duration">{duration}</div>
        </div>        
    </div>
