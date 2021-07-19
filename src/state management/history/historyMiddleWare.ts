import { Middleware } from 'redux';
import { RootStateType } from '../rootReducer'
import { updateHistory } from "./historyActions";

const MESSAGES : any = {
    USD_DEPOSIT: '100$ Deposit',
    USD_WITHDRAW: '100$ Withdrawal',
    BUY_BITCOINT: 'Purchased 1 Bitcoin',
    SELL_BITCOIN: 'Sold 1 Bitcoin',
    INCREASE_PRICE: `Increased Bitcoin price by 1,000$`,
    DECREASE_PRICE: 'Decreased Bitcoin price by 1,000$'
};

export const historyMiddleWare : Middleware<{}, RootStateType> = store => next => action => {

    if (MESSAGES[action.type]) {
        store.dispatch(updateHistory({ message: MESSAGES[action.type], date: new Date() }))
    }

    return next(action)
}
