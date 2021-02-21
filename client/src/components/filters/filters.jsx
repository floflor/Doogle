// temperamento, raza exitente o creada por nosotros, ascendente/descendente alfabetico y peso

import React, { useState } from 'react';

export default function Filters() {

    const [menu, setMenu] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if (menu === false) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    return (
        <div>
            <button value={menu} onClick={handleClick}> Filters</button>
            {menu ?
                <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1"> I have a bike</label>
                </div>
                : <></>}

        </div>
    )
}