import React, { useState } from 'react';
import "./Student.css"

const Student = () => {
    return (
        <div className='student'>
            <img src="https://fakeface.rest/thumb/view?gender=male&minimum_age=38&maximum_age=48" />
            <p>Holger D Mendoza</p>
            <p>DavidMendoza@pursuit.org</p>
            <p>BirthDay: 11/19/1997</p>
            <p>show more</p>
        </div>
    )
}

export default Student 