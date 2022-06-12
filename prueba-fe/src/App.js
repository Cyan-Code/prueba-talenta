import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    
  }, [])

  const [form, setForm] = useState('');
  const handleChange = (e) => {
    setForm(e.target.value)  
  }


  const sendForm = async (e) => {
    e.preventDefault();
    console.log(form)
    await fetch('http://localhost:8080', {
      method: 'POST',
      body: JSON.stringify({form})
    })
  };
  return (
    <form onSubmit={sendForm}>
      <button type='submit'>Send</button>
      <input
        type="text"
        name='input'
        onChange={handleChange}
        value={form.value}
      />
    </form>
  );
}

export default App;
