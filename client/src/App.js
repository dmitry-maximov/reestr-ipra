import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Lauot from './components/Lauot';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Lauot>
        <AppRouter />
      </Lauot>
    </BrowserRouter>
  );
}

export default App;
