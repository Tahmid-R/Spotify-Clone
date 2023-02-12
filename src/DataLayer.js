import React, {createContext,useContext, useReducer} from 'react'; 

export const DataLayerContext = createContext();

//children means what is wrapped - in this case it is the app wrapped between data layer
export const DataLayer = ({initialState, reducer, children}) => (

    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>

);

export const useDataLayerValue = () => useContext(DataLayerContext);