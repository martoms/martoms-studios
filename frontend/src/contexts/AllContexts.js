import { createContext, useReducer } from "react";

const AllContext = createContext();

const allContextReducer = (state, action) => {
    
    switch (action.type) {
        case 'SET_SKILLS':
            return {
                ...state,
                skills: action.payload
            };
        case 'SET_DEVPROJ':
            return {
                ...state,
                devProj: action.payload
            };
        case 'SET_GRAPHICPROJ':
            return {
                ...state,
                graphicProj: action.payload
            };
        default:
            return state
    }
};

const AllContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(allContextReducer, {
        skills: null,
        devProj: null,
        graphicProj: null
    });

    return (
        <AllContext.Provider value={{ ...state, dispatch }} >
            { children }
        </AllContext.Provider>
    );
};


// Exports
export {
    AllContext,
    allContextReducer,
    AllContextProvider
}