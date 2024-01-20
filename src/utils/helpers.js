export const languageEnam = {
    UZ: "uz",
    RU: "ru",
};

export const getLocalStorage = (str) => {
    return localStorage.getItem(str)
}

export const setLocalStorage = (key, data) => {
    return localStorage.setItem(key,data)
}