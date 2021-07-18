export const actionTypes = {
    UPDATE: 'UPDATE_HISTORY',
}

export type MessageInfoType = {
    date: Date
    message: string
}

export type HistoryActionType = {
    type: string,
    payload: MessageInfoType
};


export type HistoryStateType = Array<MessageInfoType>
