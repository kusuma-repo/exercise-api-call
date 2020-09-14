import React from 'react';
import {CardComponent} from '../card/Card.component'
import './card-list-style.css';

export const Cardlist = ({cards}) =>{
    
    return(
        <div className="card-list">
            { 
                cards.map((card)=>(
                <CardComponent key={card.id} name={card.name} cardId={card.id} />
                ))
            }
        </div>
    )
}