import React, { ReactNode, useContext, useReducer } from "react";

class CursorState {
  public initial = {
    cursor: "default",
  };

  reducer(state: any, action: { type: string; payload: any }) {
    switch (action.type) {
      case "CHANGE_CURSOR_STATE":
        return {
          ...state,
          cursor: action.payload === "focus" ? "focus" : "default",
        };
      default:
        return state;
    }
  }
}

const StateContext = React.createContext<{ state: any; dispatch: any }>({
  state: null,
  dispatch: null,
});

export function useStore() {
  return useContext(StateContext);
}

export function Provider({ children }: { children: ReactNode }) {
  const cursorState = new CursorState();
  const [state, dispatch] = useReducer(
    cursorState.reducer,
    cursorState.initial
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
