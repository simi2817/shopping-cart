import { Link } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import cart from "../data/cart";
import { useEffect, useState } from "react";
import currency from "currency.js";

const Cart = () => {
    const [cartItems, setCartItems] = useState(cart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const copy = [...cartItems];
        const sum = copy.reduce((acc, curr) => acc + currency(curr.price).value, 0);
        setTotal('£'+sum);
    }, [total, cartItems]);

    const handleDelete = (e) => {
        const copy = [...cartItems];
        const index = copy.findIndex(item => item.name === e.target.value);
        if (index > -1) {
            copy.splice(index, 1);
            cart.splice(index, 1);
            setCartItems(copy);
            return true;
        }
        return false;
    }

    return (
        <>
            <Header />
            <Navigation />
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="container">
                {
                    cartItems.map((item, index) => {
                            return (
                                <div key={index} className="product">
                                    <button value={item.name} onClick={handleDelete}>❌</button>
                                    <h3>{item.name}</h3> <h3>Qty. {item.quantity}</h3>
                                    <p>{item.price}</p>
                                    <img src={item.image} alt={item.name} height={100} />
                                </div>
                                )
                        })
                }
                <h2>Total: {total}</h2>
                </div>
                <br />
                <Link to='success'><button disabled={cart.length === 0}>Proceed to checkout</button></Link>
                <Link to='/'><button>Cancel</button></Link>
             </div>
        </>
    )
}

export default Cart;