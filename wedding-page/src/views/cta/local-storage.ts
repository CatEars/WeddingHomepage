export const getFromLocalStorage = (
    key: string,
    defaultValue: string
): string => {
    if (window && window.localStorage) {
        const value = window.localStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    }
    return defaultValue;
};
