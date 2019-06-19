//Render the entire lesson page
import React, { Component } from 'react';
import { LESSONCONTENT } from '../shared/lessonContent';
import LessonHeader from './LessonHeaderComponent';
import LessonView from './LessonViewComponent';

class LessonPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lessonContent: LESSONCONTENT,
            maxPages: LESSONCONTENT.length - 1,     //Get lesson name first then change accordingly
            completedPageNum: 1,
            currentPageNum: 0
        };
    }

    ListOptions(props) {
        return (
            <li>{props.value.id}</li>
        );
    }

    PopulatePage(item) {
        if (item.isQuiz) {
            const abc = item.options;

            return (
                <div>
                    <h3>{item.title}</h3>
                    <p className="ContentList">{item.paragraph1}</p>

                    <div>
                        <ul>
                            {abc.map((justAName) =>
                                <li key={justAName.id}>{justAName.option}</li>
                            )}
                        </ul>
                    </div>
                </div>
            );
        }

        return (

            <div>
                <h3>{item.title}</h3>
                <p className="ContentList">{item.paragraph1}</p>
            </div>
        );

    }

    NextPage = () => {
        const nextPageIndex = this.state.currentPageNum + 1;
        if (nextPageIndex <= this.state.maxPages) {
            this.setState({ currentPageNum: nextPageIndex });
        }
    }

    render() {
        return (
            <div>

                <LessonHeader></LessonHeader>
                <LessonView></LessonView>

                <p id="ProgressPercentage" className="ProgressPercentageStyle">{this.state.variablesContent[0].percentage}</p>

                <div style={{ margin: "8px" }}>
                    <div className="TestPanel">
                        {/* <this.PopulatePage item={this.state.variablesContent[0]}></this.PopulatePage> */}
                        {this.PopulatePage(this.state.variablesContent[this.state.currentPageNum])}

                    </div>
                    <button onClick={this.NextPage} className="NextButton">NEXT</button>
                </div>
            </div>
        );

    }
}

export default LessonPage;