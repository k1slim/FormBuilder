import { replace } from 'connected-react-router';

import * as Types from '../constants';
import * as BE from '../BE';

export const getForm = payload => (dispatch, getState) => {
    const state = getState();

    if (!state.formsList.forms[payload.formUuid]) {
        dispatch(replace('/'));
        return;
    }

    dispatch(({
        type: Types.SET_TABS,
        payload: {
            tabs: BE.getTabs(payload)
        }
    }));
};

export const addTab = payload => (dispatch) => {
    BE.addTab(payload);
    dispatch(({ type: Types.ADD_TAB, payload }));
};

export const updateTab = payload => (dispatch) => {
    BE.updateTab(payload);
    dispatch(({ type: Types.UPDATE_TAB, payload }));
};

export const deleteTab = payload => (dispatch) => {
    BE.deleteTab(payload);
    dispatch(({ type: Types.DELETE_TAB, payload }));
};
