import React from 'react';
import {Link} from 'react-router-dom';

function Winner() {
    let winnerPerson = 'Person';
    let winnerWeapon = 'Weapon';
    let location = 'Place'

    document.documentElement.style.backgroundColor='#64ff00';

    return (
        <div class=' is-flex is-flex-direction-column is-align-items-center mt-5 '>
            <h1 class='title '>The Winner is ...</h1>
            <h2 class='title is-4 pb-6'>{winnerPerson} with {winnerWeapon} at {location}!</h2>
            <Link to='/select'><button class="button orange is-rounded"> Next Round</button></Link>
        </div>
    )
}

export default Winner;