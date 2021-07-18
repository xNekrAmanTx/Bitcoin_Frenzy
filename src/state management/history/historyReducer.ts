import { actionTypes, HistoryActionType, HistoryStateType } from './types';

const initialState: HistoryStateType =  []


export const historyReducer = (state = initialState, action: HistoryActionType): HistoryStateType => {
    switch (action.type) {
        case actionTypes.UPDATE:
            return [action.payload, ...state]
        default:
            return state
    }
};