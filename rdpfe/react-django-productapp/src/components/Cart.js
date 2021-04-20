import React from 'react'
import cart from '../assets/imgs/cart.png'

function Cart() {
    return (
        <div className="card">
            <h2>Cart</h2>
            <img src={cart} alt='cart-img'/>
        </div>
    )
}

export default Cart
