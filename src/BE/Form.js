const TABS = uuid => `$TABS-${uuid}`;

export const getTabs = (payload) => {
    const obj = localStorage.getItem(TABS(payload.uuid));

    if (obj) {
        return JSON.parse(obj);
    }

    return {};
};

export const addTab = (payload) => {
    let obj = localStorage.getItem(TABS(payload.formUuid));

    if (obj) {
        obj = JSON.parse(obj);
        obj[payload.uuid] = payload;
        return localStorage.setItem(TABS(payload.formUuid), JSON.stringify(obj));
    }

    return localStorage.setItem(TABS(payload.formUuid), JSON.stringify({
        [payload.uuid]: payload
    }));
};

export const updateTab = (payload) => {
    const obj = JSON.parse(localStorage.getItem(TABS(payload.formUuid)));

    const item = obj[payload.uuid];

    obj[payload.uuid] = { ...item, ...payload };

    return localStorage.setItem(TABS(payload.formUuid), JSON.stringify(obj));
};

export const deleteTab = (payload) => {
    const obj = JSON.parse(localStorage.getItem(TABS(payload.formUuid)));
    delete obj[payload.uuid];

    return localStorage.setItem(TABS(payload.formUuid), JSON.stringify(obj));
};
