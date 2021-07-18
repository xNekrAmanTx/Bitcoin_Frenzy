export const actionTypes = {
    DEPOSIT: 'USD_DEPOSIT',
    WITHDRAW: 'USD_WITHDRAW',
    UPDATE: 'UPDATE_BALANCE',
}

export type ChangeUSDBalanceActionType = {
    type: string
    amount?: any
};

// export type UsdBalanceUbdateAmountType = {
//     amount:
// };

export type BalanceStateType = {
    balance: number
};