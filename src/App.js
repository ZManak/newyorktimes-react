import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
