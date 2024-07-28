import { useState } from "react"

function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const localStorageValue = localStorage.getItem(key);
        if (localStorageValue) {
            return JSON.parse(localStorageValue);
        }

        return defaultValue;
    });

    const setLocalStorage = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setLocalStorage
    ]
}

export default useLocalStorage