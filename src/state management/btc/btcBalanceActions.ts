import { ChangeBTCBalanceActionType, actionTypes } from "./types";

export const buyBTC: ChangeBTCBalanceActionType = {
    type: actionTypes.BUY
};

export const sellBTC: ChangeBTCBalanceActionType = {
    type: actionTypes.SELL
};
