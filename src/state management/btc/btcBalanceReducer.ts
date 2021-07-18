import { actionTypes, ChangeBTCBalanceActionType, BalanceStateType } from './types';

const DEFAULT_QUANTITY = 0;

const initialState = {
    balance: DEFAULT_QUANTITY,
};

export const bitcoinBalanceReducer = (state = initialState, action: ChangeBTCBalanceActionType): BalanceStateType => {
    switch (action.type) {
        case actionTypes.BUY:
            return {
                balance: ++state.balance,
            }
        case actionTypes.SELL:
            return {
                balance: --state.balance,
            }
        default:
            return state
    }
};