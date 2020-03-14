import React from "react";
import { reducer, initialState } from './reducer';
import { useCrud } from '../../customHooks/useCrud';

import useReducer from '../../customHooks/useReducer'
const Context = React.createContext();

function Provider({ children }) {
    const crud = useCrud("/comments");
    const [state, dispatch] = useReducer(reducer, initialState(initialState));

  return (
    <Context.Provider value={{ crud, state, dispatch  }}>
      {children}
    </Context.Provider>
  );
}

export {
    Context,
    Provider
}