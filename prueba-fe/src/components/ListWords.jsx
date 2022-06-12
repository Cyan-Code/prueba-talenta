import React, { useContext, useEffect } from 'react'
import { ContextApi } from '../context/ContextApi';

export const ListWords = () => {

  const {words} = useContext(ContextApi);

  return (
    <div>
      <ol>
        {
          words.map( word => (
            <li  key={word}>
              {word}
            </li>
          ))
        }
      </ol>
    </div>
  )
}
