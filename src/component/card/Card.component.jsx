import React from 'react';
import './card.styles.css';

export const CardComponent = ({name,cardId}) =>{
    return(
        <div className="card-container">
            <h1>{name}</h1>
            <img src={`https://robohash.org/${cardId}`} alt="" />
        </div>
    )
}