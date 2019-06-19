//Show the lesson route map page

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class LessonOutline extends Component {


    render() {
        return (
            <div>
                <NavLink to="/syntax"> syntax </NavLink>
                <NavLink to="/variables"> variables </NavLink>
            </div>
        );
    }
}

export default LessonOutline;