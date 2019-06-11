import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import './CSS/main.css'
import content from './content.json'

function App() {
    function test() {
        return content.test.map(x => {
            return <li key={x.id} className="ContentList">{x.content}</li>;
        });
    }

  return (
      <div className="App">
         

    <div className="Header">
        <div className="BackToMainButton">
                  <button>BTM</button>
              </div>
              <h1 className="Title">VARIABLES</h1>
    </div>

          {/* This is a comment in ReactJS*/}

          <div className="ProgressBarBlock">
              <div className="ProgressBarContainer">
                  <div className="ProgressBar">
                  </div>
              </div>
              <ul className="ButtonLists">
                  <li className="SliderButtons">
                      1
            </li>
                  <li className="SliderButtons">
                      2
            </li>
                  <li className="SliderButtons">
                      3
            </li>
                  <li className="SliderButtons">
                      4
            </li>
                  <li className="SliderButtons">
                      5
            </li>
              </ul>
          </div>

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
