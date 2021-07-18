import { actionTypes, ChangePriceActionType, PriceStateType } from './types';

const DEFAULT_PRICE = 1000;

const initialState = {
    price: DEFAULT_PRICE,
};

export const priceReducer = (state = initialState, action: ChangePriceActionType): PriceStateType => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return {
                price: state.price + DEFAULT_PRICE,
            }
        case actionTypes.DECREASE:
            return {
                price: state.price - DEFAULT_PRICE,
            }
        default:
            return state
    }
};
