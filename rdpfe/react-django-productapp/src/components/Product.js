import React from 'react'

function Product({onAdd, product}) {
    return (
        <div className='product'>
            <img src={product.image_URL} alt={product.title} />
            <div className="product-typo">
                <div>
                    <h3>{product.title}</h3>
                    <h2>₹ {product.price}</h2>
                    <p>{product.brand_Name}</p>
                </div>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                 </div>
            </div>
        </div>
    )
}

export default Product
