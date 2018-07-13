import * as Types from '../constants';
import * as BE from '../BE';

export const addForm = payload => (dispatch) => {
    BE.addForm(payload);
    dispatch(({ type: Types.ADD_FORM, payload }));
};

export const deleteForm = payload => (dispatch) => {
    BE.deleteForm(payload);
    dispatch(({ type: Types.DELETE_FORM, payload }));
};

export const updateForm = payload => (dispatch) => {
    BE.updateForm(payload);
    dispatch(({ type: Types.UPDATE_FORM, payload }));
};
