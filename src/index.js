import React from 'react';
import {render} from 'react-dom';

function Hi() {
    return <p>Good Morning Kelvin</p>
}

render(<Hi/>, document.getElementById("app"));