export const sortNumbers = ({ sort = 1, propName }, a, b) => (a[propName] - b[propName]) * sort;

export const sortLetters = ({ sort = 1, propName }, a, b) => {
    if (a[propName] > b[propName]) {
        return sort;
    }

    if (a[propName] < b[propName]) {
        return -1 * sort;
    }

    return 0;
};
