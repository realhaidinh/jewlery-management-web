import Layout from './components/Layout/Layout';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  console.log('app');

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/*' element={<Layout />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
