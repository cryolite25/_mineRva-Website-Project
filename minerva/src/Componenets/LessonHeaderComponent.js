//Has lesson title, has lesson progress bar, number of knobs button thingy and has control over the percentage bar and show the back to lesson page button

import React, { Component } from 'react';
import '../CSS/main.css';
import { NavLink } from 'react-router-dom';

class LessonHeader extends Component {

    render() {
        return (
            //Back to main button and lesson title here
            <div className="Header" >
                <div className="BackToMainButton">
                    <NavLink to="/lessonOutline">
                        <button>BTM</button>
                    </NavLink>

                </div>
                <h1 className="Title">Variables</h1>
            </div>
        );
    }

}

export default LessonHeader;