import './App.css';
import {Routes, Route} from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className='App'>
    <NextUIProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
    </NextUIProvider>
    </div>
  );
}

export default App;
