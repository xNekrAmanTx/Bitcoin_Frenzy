import { actionTypes, ChangeUSDBalanceActionType, BalanceStateType } from './types';

const INITIAL_BALANCE = 200;
const CHANGE_AMOUNT = 100;

const initialState = {
    balance: INITIAL_BALANCE,
};

export const usdBalanceReducer = (state = initialState, action: ChangeUSDBalanceActionType): BalanceStateType => {    
    switch (action.type) {
        case actionTypes.DEPOSIT:
            return {
                balance: state.balance + CHANGE_AMOUNT,
            }
        case actionTypes.WITHDRAW:
            return {
                balance: state.balance - CHANGE_AMOUNT,
            }
        case actionTypes.UPDATE:
            return {
                balance: state.balance + action.amount,
            }
        default:
            return state
    }
};
