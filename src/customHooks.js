import {useState} from 'react';

/**
 * If local storage has a value stored at the given key, return
 * an array containing:
 *  - a stateful value initialized to the stored value
 *  - a function to set that stateful value
 * else, return an array containing:
 *  - a stateful value initialized to initialValue
 *  - a function to set that stateful value
 * @param {String} key 
 * @param {any} initialValue 
 * @return {[any, Function]}
 */
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key);
        return (item) ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};

/**
 * Dynamically sets the `dark-mode` class on the document body
 * based on the stateful value in the returned array. The array
 * also contains a function to set the stateful value.
 * @return {[boolean, Function]}
 */
export const useDarkMode = ()=> {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkModeEnabled', false);
    return [darkModeEnabled, setDarkModeEnabled];
};
