import React from 'react'
import PropTypes from 'prop-types';
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider/StateProvider'

function CheckoutProduct({
    id,
    title,
    image,
    price,
    rating
}) {
    CheckoutProduct.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired
    };

    const [state, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
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
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt={title}
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_) => (
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
