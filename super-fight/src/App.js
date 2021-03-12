import './App.css';
import React, { createContext } from 'react';
import RouterComponent from './routing.component';

export const UserContext = createContext();
const anyname={  a: 'anyname can be variable, object or anything',
b: 'bbb', c: 'ccc'}

function App() {
  return (
    <div className='container'>
      <RouterComponent></RouterComponent>
    </div>
  );
}

export default App;
