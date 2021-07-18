import { ChangeUSDBalanceActionType, actionTypes } from "./types";

export const increaseUSDBalance: ChangeUSDBalanceActionType = {
    type: actionTypes.DEPOSIT
};

export const decreaseUSDBalance: ChangeUSDBalanceActionType = {
    type: actionTypes.WITHDRAW
};

export const updateUSDBalance = (payload: number): ChangeUSDBalanceActionType => ({
    type: actionTypes.UPDATE,
    amount: payload
});
