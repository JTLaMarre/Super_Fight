import React from 'react';
import {Link} from 'react-router-dom';

function Winner() {

    return (
        <div>
            <h1 class='title'>Winner!</h1>
            <p>XYZ with weapon ABC</p>
            <Link to='/select'><button>Continue</button></Link>
        </div>
    )
}

export default Winner;