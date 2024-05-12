// ProductCard.js
import React from 'react';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default ProductCard;
