import React from 'react';

export function selectWinnerComponent() {
    let counter = 0;
    let setOnePerson = 'Person 1';
    let setOneWeapon = 'Weapon 1';
    let setTwoPerson = 'Person 2';
    let setTwoWeapon = 'Weapon 2';
    let location = 'A box'

    return (
        <div class=' is-flex is-flex-direction-column is-align-items-center is-align-content-center'>
            <h1 class='title '> Round {counter}</h1>
            <h2 class='title is-4 pb-6'> Location: {location}</h2>
            <div class="tile is-ancestor is-5">
                <div class="tile is-parent">
                    <article class="tile is-child box  ">
                        <p class="title is-size-4">{setOnePerson}</p>
                        <div class="content pb-6">

                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title is-size-4">{setOneWeapon}</p>

                    </article>
                </div>

            </div>
            <h1 class='title '> VS.</h1>
            <div class="tile is-ancestor is-5">
                <div class="tile is-parent">
                    <article class="tile is-child box ">
                        <p class="title is-size-4">{setTwoPerson}</p>
                        <div class="content pb-6">

                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title is-size-4">{setTwoWeapon}</p>

                    </article>
                </div>
            </div>
            <h2 class='title is-5 pt-6'> Choose a Winner</h2>
            <div class='buttons are-medium'>
                
                <button class="button">{setOnePerson}</button>
                <button class="button"> {setTwoPerson}</button>
            </div>


        </div>
    )

}