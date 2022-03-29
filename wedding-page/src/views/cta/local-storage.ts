export const getFromLocalStorage = (
    key: string,
    defaultValue: string
): string => {
    if (window && window.localStorage) {
        const value = window.localStorage.getItem(key);
        if (value) {
            return value;
        }
    }
    return defaultValue;
};
