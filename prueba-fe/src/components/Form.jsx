import React, { useContext, useEffect } from 'react'
import { ContextApi } from '../context/ContextApi';
import { fetchPostHelper } from '../helpers/fetch';

export const Form = () => {
    useEffect(() => {}, []);
    
    const {setData, data, setWords, words} = useContext(ContextApi);
    const handleChange = (e) => setData(e.target.value);

    const sendForm = async (e) => {
      e.preventDefault();
      if (words.find((element) => element === data)) return alert('Ya esta en la lista');
      await fetchPostHelper(data).then(data => setWords(data));
    };
  return (
    <>
        <form onSubmit={sendForm}>
          <button type='submit'>Send</button>
          <input
            type="text"
            name='input'
            onChange={handleChange}
            value={data}
          />
        </form>
    </>
  )
}
