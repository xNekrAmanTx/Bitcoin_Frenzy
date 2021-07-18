 import { MessageInfoType, actionTypes, HistoryActionType } from "./types";

 export const updateHistory = (payload: MessageInfoType): HistoryActionType => ({
     type: actionTypes.UPDATE,
     payload
 });
