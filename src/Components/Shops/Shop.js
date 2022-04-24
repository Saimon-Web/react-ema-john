import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // shower cart info

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCard = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCard.push(addedProduct)
            }
        }
        setCart(saveCard);
    }, [products])

    // button addevent handler
    const addToEvenHandle = (selectedProduct) => {
        // console.log(product)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }





        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        addToEventHandle={addToEvenHandle}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Orders </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;