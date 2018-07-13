import { createReducer } from 'redux-create-reducer';

import * as Types from '../constants';

export const formsList = createReducer({}, {
    [Types.ADD_FORM](state, action) {
        const newForm = { [action.payload.uuid]: action.payload };

        return { ...state, forms: { ...state.forms, ...newForm } };
    },

    [Types.DELETE_FORM](state, action) {
        const forms = { ...state.forms };
        delete forms[action.payload.uuid];

        return { ...state, forms };
    },

    [Types.UPDATE_FORM](state, action) {
        const form = state.forms[action.payload.uuid];

        return {
            ...state,
            forms: {
                ...state.forms,
                [action.payload.uuid]: {
                    ...form,
                    ...action.payload
                }
            }
        };
    }
});

export default formsList;
