const FORMS_LIST = 'FORMS_LIST';

export const getFormsList = () => {
    const obj = localStorage.getItem(FORMS_LIST);

    if (obj) {
        return JSON.parse(obj);
    }

    return {};
};

export const addForm = (payload) => {
    let obj = localStorage.getItem(FORMS_LIST);

    if (obj) {
        obj = JSON.parse(obj);
        obj[payload.uuid] = payload;
        return localStorage.setItem(FORMS_LIST, JSON.stringify(obj));
    }

    return localStorage.setItem(FORMS_LIST, JSON.stringify({ [payload.uuid]: payload }));
};

export const deleteForm = (payload) => {
    const obj = JSON.parse(localStorage.getItem(FORMS_LIST));
    delete obj[payload.uuid];

    return localStorage.setItem(FORMS_LIST, JSON.stringify(obj));
};
