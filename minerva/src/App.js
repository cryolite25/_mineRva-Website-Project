import React, { Component } from 'react';
import './CSS/main.css';
import LessonPage from './Componenets/LessonPageComponent';
import LessonOutline from './Componenets/LessonOutlineComponent';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import NameForm from './Componenets/NameForm';

//Imprt react router dom, need to install

class App extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            valueState: " ",
            name: cookies.get('name') || 'Ben'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(name) {
        console.log(name);
        const { cookies } = this.props;

        cookies.set('name', name, { path: '/' });
        this.setState({ name });
    }

    handleChange(event) {
        this.setState({ valueState: event.target.value });
    }

    handleSubmit(event) {
        alert("Submit button clicked with value of: " + this.state.valueState);
        event.preventDefault();
    }

    render() {

        const { name } = this.state;

        return (
            <React.Fragment>
                <BrowserRouter>
                    <div>
                        <Route path="/lessonOutline" component={LessonOutline}></Route>
                        <Route path="/syntax" component={LessonPage}></Route>
                        <Redirect to="/lessonOutline"></Redirect>
                    </div>
                </BrowserRouter>
                {/* <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" nameVar={this.state.valueState} onChange={this.handleChange} ></input>
                        </label>
                        <input type="submit" value="Submit" />


                    </form>
                </div>
        */}
                <div>
                    <NameForm name={name} onChange={this.handleNameChange.bind(this)} />
                    {this.state.name && <h1>Hello {this.state.name}!</h1>}
                </div>

            </React.Fragment>


        );
    }
}

export default withCookies(App);