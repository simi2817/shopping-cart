/* eslint-disable react/prop-types */
import { useState } from 'react';
import Quantity from './Quantity.jsx';

const ItemCard = ({ item }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='item-card'>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} height={300} />
            <br />
            {
                readMore ? <cite>{item.desc}</cite> : null
            }
            <br />
            <button onClick={() => setReadMore(!readMore)}>{readMore ? `Close` : `Read More`}</button>    
            <Quantity name={item.name} price={item.price} image={item.image}ß/>
            <br />
        </div>
    )
}

export default ItemCard;