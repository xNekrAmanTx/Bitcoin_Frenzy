export const actionTypes = {
    BUY: 'BUY_BITCOINT',
    SELL: 'SELL_BITCOIN',
}

export type ChangeBTCBalanceActionType = {
    type: string
};

export type BalanceStateType = {
    balance: number
};