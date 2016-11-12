import React from 'react';
import {render} from 'react-dom';
import FirstComponent from './FirstComponent.jsx';
import NextComponent from './NextComponent.jsx';
import ToggleComponent from './ToggleComponent.jsx';
import GreetingComponent from './GreetingComponent.jsx';
import LessonsComponent from './LessonsComponent.jsx';
import CompositionComponent from './CompositionComponent.jsx';

import { Router, Route, hashHistory } from 'react-router'

class App extends React.Component {
    componentDidMount() {
        console.log("test");
    }
    render () {
        return (
            // <div>
            //     <h1>Hello React!</h1>
            //     <FirstComponent name="Artur"/>
            //     <NextComponent/>
            //     <ToggleComponent/>
            //     <GreetingComponent/>
            // </div>
            <Router history={hashHistory}>
                <Route path="/" component={FirstComponent}>
                    <Route path="/lessons" component={LessonsComponent}/>
                    <Route path="/toggle" component={ToggleComponent}/>
                    <Route path="/greeting" component={GreetingComponent}/>
                    <Route path="/next" component={NextComponent}/>
                </Route>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('app'));