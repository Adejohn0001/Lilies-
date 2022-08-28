import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../../lilies/src/Auth';
import React from 'react';
import ModalCart from './components/ModalCart';
import Card from './components/Card';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  return (
    <AuthProvider className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<ModalCart />} />
          <Route path='/card' element={<Card />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
