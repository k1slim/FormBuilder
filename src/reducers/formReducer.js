import { createReducer } from 'redux-create-reducer';

import * as Types from '../constants';

export const form = createReducer({}, {
    [Types.SET_TABS](state, action) {
        return { ...state, tabs: action.payload.tabs };
    },

    [Types.ADD_TAB](state, action) {
        const newTab = { [action.payload.uuid]: action.payload };

        return { ...state, tabs: { ...state.tabs, ...newTab } };
    },

    [Types.UPDATE_TAB](state, action) {
        return {
            ...state,
            tabs: {
                ...state.tabs,
                [action.payload.uuid]: { ...state.tabs[action.payload.uuid], ...action.payload }
            }
        };
    },

    [Types.DELETE_TAB](state, action) {
        const tabs = { ...state.tabs };
        delete tabs[action.payload.uuid];

        return { ...state, tabs };
    }
});

export default form;
