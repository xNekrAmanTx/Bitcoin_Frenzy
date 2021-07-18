export const actionTypes = {
    INCREASE: 'INCREASE_PRICE',
    DECREASE: 'DECREASE_PRICE'
};

export type ChangePriceActionType = {
    type: string
};

export type PriceStateType = {
    price: number
};
