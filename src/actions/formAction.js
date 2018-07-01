import * as Types from '../constants';
import * as BE from '../BE';

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
