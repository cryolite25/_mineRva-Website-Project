//Show the lesson route map page

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class LessonOutline extends Component {


    TestFunc() {
        alert("CLICK");
    }

    render() {
        return (
            <div>
                <NavLink to="/syntax"> syntax </NavLink>
            </div>
        );
    }
}

export default LessonOutline;