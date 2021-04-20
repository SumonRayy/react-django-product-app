import React from 'react'
import cart from '../assets/imgs/cart.png'

function Cart(props) {

    const {cartItems, setCartItems, onAdd, onRemove, countCartItems} = props;

    const itemsPrice = cartItems.reduce((a, c) => a+c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 5000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const checkoutHandler = () =>{
        setCartItems([])
        alert('Checkout Completed!')
    }

    return (
        <div className="card">
            <div className="cart-header">
                <h2>Cart</h2>
                <img src={cart} alt='cart-img'/>{' '}{countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ) : (<></>)}
            </div>
            <div className="cart block">
                {cartItems.length === 0 ? (<p>Cart is Empty</p>):(<div>
                    {cartItems.map((item)=>(
                        <div key={item.id} className="item">
                            <div className="item-name">
                                <h3>{item.title}</h3>
                                <button onClick={() => onRemove(item)} className="remove">
                                    -
                                </button>{' '}
                                <button onClick={() => onAdd(item)} className="add">
                                    +
                                </button>
                            </div>
                            <div className='qty'>
                                {item.qty} x ₹ {item.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                    {cartItems.length !== 0 && (
                        <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2"><strong>Total Price</strong></div>
                            <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
                        </div>
                        <hr/>
                        <div className='rowcenter'>
                            <button className="checkout" onClick={() => checkoutHandler()}>Checkout</button>
                        </div>
                        </>
                    )}
                </div>)}
            </div>
        </div>
    )
}

export default Cart
