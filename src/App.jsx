import Layout from './components/Layout/Layout';
import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

const LoginContext = createContext();


function App() {

  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={login}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Layout />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
