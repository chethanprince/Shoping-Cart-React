import { Action } from 'redux';

import SerachAction from '../actions/SearchAction'

type IAction = {
    code: string;
} & Action

function SearchReducer(store = '', action: IAction) {
    switch (action.type) {
        case SerachAction.ActionTypes.SERACH_NAME:
            return action.code
        default:
            return store
    }
}


export default SearchReducer;