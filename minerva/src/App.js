import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
//import './App.css';
import './CSS/main.css'
import { CONTENT } from './shared/content.js'
import LessonHeader from './Componenets/LessonHeaderComponent';
import LessonView from './Componenets/LessonViewComponent';

function App() {
    function test() {
        return content.test.map(x => {
            return <li key={x.id} className="ContentList">{x.content}</li>;
        });
    }

    return (
        <div className="App">


            <LessonHeader></LessonHeader>
            <LessonView></LessonView>

            {/* This is a comment in ReactJS*/}



            <p id="ProgressPercentage" className="ProgressPercentageStyle">
                100%
    </p>

            <div style={{ margin: "8px" }}>

                <div className="TestPanel">
                    <h3>
                        DEFINITION
            </h3>
                    <ul>
                        <li className="ContentList">
                            A variable is a special type of amount
                            or quantity with an unknown value
                </li>
                        <li className="ContentList">

                            Think of a variable as a value in Algebra. The variable "X"
                            can have any values stored it in.
                </li>
                    </ul>

                    <h3>
                        WHY
            </h3>
                    <ul>
                        {/* <li className="ContentList">Variables make working with data much easier.</li>
                      <li className="ContentList">Writing complex programs are easier due to variables.</li>
                      <li className="ContentList">For example, drawing out the graph of a "y = mx + c" function is simple due to the variables in them.</li> */}
                        {test()}
                    </ul>
                </div>

                <button onClick={() => alert("Next page")} className="NextButton">NEXT</button>

            </div>
        </div>
    );
}

export default App;
