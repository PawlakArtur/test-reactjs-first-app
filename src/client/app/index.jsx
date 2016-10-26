import React from 'react';
import {render} from 'react-dom';
import FirstComponent from './FirstComponent.jsx';
import NextComponent from './NextComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello React!</h1>
                <FirstComponent/>
                <NextComponent/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));