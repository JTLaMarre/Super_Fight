import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {selectWinnerComponent} from './components/selectWinner'

export default function RouterComponent(){

    return(
        <BrowserRouter>
        <div>
            <Route exact path ='/' component={selectWinnerComponent} />
        </div>
        </BrowserRouter>
    )
}