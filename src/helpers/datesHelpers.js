export const formatDate = (date, userOptions = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const options = { ...defaultOptions, ...userOptions };

    return (new Date(date)).toLocaleDateString('en-US', options);
};

export default formatDate;
