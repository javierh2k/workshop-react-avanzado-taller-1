import { useState, useMemo } from 'react';

export default (reducer, initialState) => {
    const [state, setState] = useState(initialState);
    const ob = Object.keys(reducer(state)).reduce((obj, key) => {
        obj[key] = payload =>
            setState(prevState => ({
                ...prevState,
                ...reducer(prevState)[key](payload),
            })) || true;
        return obj;
    }, {});

    const dispatch = useMemo(() => ob, [reducer]);
    return [state, dispatch];
};