
import React, {useContext} from 'react';
import { UserContext } from '../App';

export function SelectWinnerComponent() {
    const data = useContext(UserContext);
    let counter =1;

    let personOneIndex = Math.floor(Math.random()*data.people.length);
    let setOnePerson = 'Batman'
    let weaponOneIndex = Math.floor(Math.random()*data.weapons.length);
    let setOneWeapon = 'A brick';

    let personTwoIndex = Math.floor(Math.random()*data.people.length)
    let setTwoPerson = 'Inflatable Balloon Man'
    let weaponTwoIndex = Math.floor(Math.random()*data.weapons.length);
    let setTwoWeapon = 'A crowbar';

    let location = data.location;
    let backColor = '';

    if ((counter % 3) == 0) {
        backColor = '#fc49ab'
    } else if ((counter % 3) == 1) {
        backColor = '#ff7300'

    } else if ((counter % 3) == 2) {
        backColor = '#5fe8ff'
    }

    document.documentElement.style.backgroundColor = backColor
    return (
        <div class=' is-flex is-flex-direction-column is-align-items-center mt-5 '>
            <h1 class='title '> Round {counter}</h1>
            <h2 class='title is-4 pb-6'> Location: {location}</h2>
            <div class="tile is-ancestor is-5">
                <div class="  tile is-parent">
                    <article class="yellow tile is-child box  ">
                        <p class=" title is-size-4">{setOnePerson}</p>
                        <div class="content pb-6">

                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box yellow">
                        <p class="title is-size-4">{setOneWeapon}</p>

                    </article>
                </div>

            </div>
            <h1 class='title '> VS.</h1>
            <div class="tile is-ancestor is-5">
                <div class="tile is-parent">
                    <article class="tile is-child box green">
                        <p class="title is-size-4">{setTwoPerson}</p>
                        <div class="content pb-6">

                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box green">
                        <p class="title is-size-4">{setTwoWeapon}</p>

                    </article>
                </div>
            </div>
            <h2 class='title is-5 pt-6'> Choose a Winner</h2>
            <div class='buttons are-medium'>
                <button class="button yellow is-rounded">{setOnePerson}</button>
                <button class="button green is-rounded"> {setTwoPerson}</button>
            </div>

            
        </div>

    )

}