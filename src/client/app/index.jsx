import React from 'react';
import {render} from 'react-dom';
import FirstComponent from './FirstComponent.jsx';
import NextComponent from './NextComponent.jsx';
import ToggleComponent from './ToggleComponent.jsx';
import GreetingComponent from './GreetingComponent.jsx';

class App extends React.Component {
    componentDidMount() {
        console.log("test");
    }
    render () {
        return (
            <div>
                <h1>Hello React!</h1>
                <FirstComponent name="Artur"/>
                <NextComponent/>
                <ToggleComponent/>
                <GreetingComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));