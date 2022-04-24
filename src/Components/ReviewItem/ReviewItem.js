import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { removeHandler } = props;
    const { name, price, quantity, shipping, img } = props.product;
    return (
        <div className='review-item'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="info-container">
                <div className="info">
                    <h3 title={name}>Name:{name.length > 20 ? name.slice(0, 20) : name + '...'}</h3>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping:{shipping}</p>
                </div>
                <div className="delete-button">
                    <button onClick={() => removeHandler(props.product)} className='btn'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;