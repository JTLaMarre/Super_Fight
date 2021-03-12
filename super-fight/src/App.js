import './App.css';
import React, { createContext } from 'react';
import RouterComponent from './routing.component';

export const UserContext = createContext();
const winner={ winnerPerson:'winnerPerson', winnerWeapon:'winnerWeapon',location: 'location', counter:0, people:[], weapons:[]}

function App() {
  return (
    <div className='container'>
      <UserContext.Provider value={anyname}>
        <RouterComponent></RouterComponent>
      </UserContext.Provider> 
    </div>
  );
}

export default App;
