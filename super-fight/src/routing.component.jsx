import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {selectWinnerComponent} from './components/selectWinner'

export default function RouterComponent(){
    return(
        <BrowserRouter>
        <div>
            <Route exact path ='/select' component={selectWinnerComponent} />
        </div>
        </BrowserRouter>
    )
}