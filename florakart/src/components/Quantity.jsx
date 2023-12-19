/* eslint-disable react/prop-types */
import currency from "currency.js";
import { useState } from "react";
import cart from '../data/cart.js';

const Quantity = ({ name, price, image }) => {
    const [quantity, setQuantity] = useState(1);
    const [newPrice, setPrice] = useState(price);
    const [addItem, setAddItem] = useState([]);
    const [click, setClick] = useState(false);
    
    const updateQuantity = (count) => {
        setQuantity((curr) => curr + count);
        setPrice((curr) => {
            const currAmount = currency(curr);
            const currPrice = currency(price);
            if(count > 0) {
                const total = (currAmount.value + currPrice.value).toFixed(2);
                return '£'+ total.toString();
            }
            else {
                const total = (currAmount.value - currPrice.value).toFixed(2);
                return '£'+ total.toString();
            }
        });
    }

    const handleItem = () => {
        const item = {
            name: name,
            quantity: quantity,
            image: image,
            price: newPrice
        };
        const itemArr = [...addItem];
        itemArr.push(item);
        setAddItem(itemArr);
        cart.push(item);
        setClick(true);
    }

    return (
        <>
            <p>{newPrice}</p>
            <button disabled={quantity === 5} onClick={(() => updateQuantity(1))}>➕</button>
            <p className="quantity">{quantity}</p>
            <button disabled={quantity === 1} onClick={(() => updateQuantity(-1))}>➖</button>
            <br />
            <br />
            {
                click ? <p>Added successfully!</p> :
                <button onClick={handleItem} disabled={quantity === 0}>Add to cart</button>
            }
        </>
    )
}

export default Quantity;