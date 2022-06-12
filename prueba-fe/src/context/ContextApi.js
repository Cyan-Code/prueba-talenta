import React, { createContext } from "react";
import { useState } from "react";

export const ContextApi = createContext();

export const ContextProvider = ({children}) => {

    const initialArray = [];
    const initialState = async () => {
      await fetch('http://localhost:8080/')
            .then(data => data.json())
            .then(data => data.forEach(word => {
              initialArray.push(word);
            }))
    };
    initialState()
    const [data, setData] = useState('');
    const [words, setWords] = useState(initialArray);


  return (
    <ContextApi.Provider value={{
        setData,
        data,
        setWords,
        words
    }}>
        { children }
    </ContextApi.Provider>
  )
}

