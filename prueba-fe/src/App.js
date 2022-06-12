import { useEffect } from 'react';
import { Form } from './components/Form';
import { ListWords } from './components/ListWords';
import { ContextProvider } from './context/ContextApi';

function App() {
  useEffect(() => {}, []);

  return (
    <ContextProvider>
        <Form />
        <ListWords />
    </ContextProvider>
  );
}

export default App;
