import { actionTypes, ChangePriceActionType } from "./types";

export const increasePrice: ChangePriceActionType = {
    type: actionTypes.INCREASE
};

export const decreasePrice: ChangePriceActionType = {
    type: actionTypes.DECREASE
};