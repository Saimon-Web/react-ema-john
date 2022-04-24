import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { product, addToEventHandle } = props;
    const { name, img, price, ratings, category } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>price:${price}</p>
                <p>Rating: {ratings}</p>
                <p>Category:{category}</p>
            </div>
            <button onClick={() => addToEventHandle(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div >
    );
};

export default Product;