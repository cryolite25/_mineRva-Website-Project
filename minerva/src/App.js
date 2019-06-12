import React, { Component } from 'react';
import './CSS/main.css';
import LessonPage from './Componenets/LessonPageComponent';
import LessonOutline from './Componenets/LessonOutlineComponent';
import { BrowserRouter } from 'react-router-dom';
//Imprt react router dom, need to install

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <LessonPage></LessonPage>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;