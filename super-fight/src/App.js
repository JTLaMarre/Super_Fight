import './App.css';
import React, { createContext } from 'react';
import RouterComponent from './routing.component';

export const UserContext = createContext();
const anyname={ winnerPerson:'winnerPerson', winnerWeapon:'winnerWeapon',location: 'The Ocean', counter:0, people:['Batman', 'Freddy Fazbear'], weapons:['A balloon', 'A brick']}

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
