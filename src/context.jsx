import React, { createContext, useContext, useReducer } from 'react'

const ismailContext = createContext()

 export const useUser = () => {
    return useContext(ismailContext)
}

const Context = ({children}) => {

   const initialstate = {
        count: 0
    }

    const reducer = (state, action) => {
        switch (type, action){
            case 'INCREMENT':
                return{...state, count:{...state.count + 1 }}
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)

        const allColors = [
            { id: 1, color: "#123524", },
            { id: 2, color: "#3E7B27", },
            { id: 3, color: "#85A947", },
            { id: 4, color: "#001A6E" },
            { id: 5, color: "#009990" },
        ]

        const values = {
            allColors,
            dispatch,
            state
        }
    return (

        <ismailContext.Provider value={values}>
            {children}
        </ismailContext.Provider>
    )
}

export default Context

