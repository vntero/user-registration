import './App.css';
import {Routes, Route} from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';

import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className='App'>
    <NextUIProvider>
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      <BottomNav/>
    </NextUIProvider>
    </div>
  );
}

export default App;
