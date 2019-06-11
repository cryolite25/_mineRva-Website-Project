//Has lesson title, has lesson progress bar, number of knobs button thingy and has control over the percentage bar and show the back to lesson page button

import React, { Component } from 'react';
import '../CSS/main.css';

function LessonView() {
    return (
        //Back to main button and lesson title here
        <div className="ProgressBarBlock">
            <div className="ProgressBarContainer">
                <div className="ProgressBar"></div>
            </div>
            <div>
                <ul className="ButtonLists">
                    <li className="SliderButtons">1</li>
                </ul>
            </div>
        </div>
    );
}

export default LessonView;