import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer'
import { userContext } from './context/userContext';


function App() {
  
  const [user, setUser] = useState('');

  const getForm = (name) => setUser(name);
  const clear = () => setUser({});

  const data = {
    user,
    getForm,
    clear
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
        </userContext.Provider>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
