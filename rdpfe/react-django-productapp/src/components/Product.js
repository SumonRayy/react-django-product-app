import React from 'react'

function Product({onAdd, product}) {
    return (
        <div className='product'>
            <img src={product.image} alt={product.title} />
            <div className="product-typo">
                <div>
                    <h3>{product.title}</h3>
                    <h2>₹ {product.price}</h2>
                    <p>{product.brand}</p>
                </div>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                 </div>
            </div>
        </div>
    )
}

export default Product
