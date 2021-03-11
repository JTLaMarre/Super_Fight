import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {selectWinnerComponent} from './components/selectWinner'
import Winner from './components/Winner';

export default function RouterComponent(){

    return(
        <BrowserRouter>
        <div>
            <Route exact path ='/' component={Winner} />
            <Route exact path ='/select' component={selectWinnerComponent} /> 
            {/* <Route exact path='/winner' component={Winner}></Route> */}
        </div>
        </BrowserRouter>
    )
}