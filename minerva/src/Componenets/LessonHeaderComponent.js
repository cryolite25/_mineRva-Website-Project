//Has lesson title, has lesson progress bar, number of knobs button thingy and has control over the percentage bar and show the back to lesson page button

import React, { Component } from 'react';
import '../CSS/main.css';

function LessonHeader() {
    return (
        //Back to main button and lesson title here
        <div className="Header">
            <div className="BackToMainButton">
                <button>BTM</button>
            </div>
            <h1 className="Title">Variables</h1>
        </div>
    );
}

export default LessonHeader;