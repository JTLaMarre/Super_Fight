import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {SelectWinnerComponent} from './components/SelectWinner'
import Winner from './components/Winner';

export default function RouterComponent(){

    return(
        <BrowserRouter>
        <div>
            <Route exact path ='/' component= {Winner} />
            <Route exact path ='/select' component={SelectWinnerComponent} />
            
            {/* <Route exact path='/winner' component={Winner}></Route> */}
        </div>
        </BrowserRouter>
    )
}