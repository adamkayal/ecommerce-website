export const initialState = {
    basket: [{ id: 'idsfiojdf', price: '2348', title: 'tam', rating: 4 }],
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = newBasket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Can't remove product with id ${action.id} as it is not in basket.`)
            }

            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;