
import '@mantine/core/styles.css';
import './App.css';
import HomePage from './components/HomePage';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    
    <MantineProvider>
      <HomePage />
    </MantineProvider>

  );
}

export default App;
