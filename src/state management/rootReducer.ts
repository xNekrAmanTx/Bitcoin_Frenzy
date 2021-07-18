import { combineReducers } from 'redux';
import { priceReducer } from './price/priceReducer';
import { usdBalanceReducer } from './usd/usdBalanceReducer';
import { bitcoinBalanceReducer } from './btc/btcBalanceReducer';
import { historyReducer } from './history/historyReducer';

const rootState = {
    priceInfo: priceReducer,
    bitCoinBalance: bitcoinBalanceReducer,
    usdBalance: usdBalanceReducer,
    history: historyReducer
};

const rootReducer = combineReducers(rootState);

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;