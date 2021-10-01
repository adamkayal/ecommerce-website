import React from 'react'
import PropTypes from 'prop-types';
import "./Product.css"
import { useStateValue } from '../StateProvider/StateProvider'

function Product({
    id,
    title,
    image,
    price,
    rating
}) {
    Product.propTypes = {
        open: PropTypes.bool.isRequired,
        setOpen: PropTypes.func.isRequired,
        onClick: PropTypes.any.isRequired,
        buttonText: PropTypes.string.isRequired,
        isUserForm: PropTypes.bool.isRequired,
        postUrl: PropTypes.string,
        setOpenSignUp: PropTypes.func,
        theme: PropTypes.object.isRequired
    };

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <h2>{title}</h2>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
