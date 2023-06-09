import Layout from './components/Layout/Layout';
import './App.css';
import { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

export const LoginContext = createContext();


function App() {
  const [login, setLogin] = useState(false)
  console.log('app');


  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<Layout />}>
          </Route>
        </Routes>
      </div>
    </LoginContext.Provider>
  )
}

export default App;
