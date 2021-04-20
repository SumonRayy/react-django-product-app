import React from 'react'
import Product from './Product'

function Main({ onAdd, products }) {
    return (
            <div className="card">
                <h2>Products</h2>
                <div className="product-container">
                    {products.map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd}/>
                    ))}
                </div>
            </div>
    )
}

export default Main;
