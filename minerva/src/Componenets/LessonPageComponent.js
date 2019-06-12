//Render the entire lesson page
import React, { Component } from 'react';
import { VARIABLESCONTENT } from '../shared/variablesContent';
import LessonHeader from './LessonHeaderComponent';
import LessonView from './LessonViewComponent';

class LessonPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            variablesContent: VARIABLESCONTENT
        };
    }

    PopulatePage({ item }) {
        return (
            <div>
                <h3>{item.title}</h3>
                <p className="ContentList">{item.paragraph1}</p>
            </div>
        );
    }

    render() {
        return (
            <div>

                <LessonHeader></LessonHeader>
                <LessonView></LessonView>

                <p id="ProgressPercentage" className="ProgressPercentageStyle">100%</p>

                <div style={{ margin: "8px" }}>
                    <div className="TestPanel">
                        <this.PopulatePage item={this.state.variablesContent[0]}></this.PopulatePage>
                        <button onClick={() => alert("Next page")} className="NextButton">NEXT</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default LessonPage;