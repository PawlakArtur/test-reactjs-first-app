import React from 'react';
import { Link } from 'react-router'

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello {this.props.name}</h2>
                <ul role="nav" className="nav">
                    <li><Link to="/"  activeClassName="active">Home Page</Link></li>
                    <li><Link to="/lessons"  activeClassName="active">Lessons</Link></li>
                    <li><Link to="/toggle" activeClassName="active">Toggle</Link></li>
                    <li><Link to="/greeting" activeClassName="active">Greeting</Link></li>
                    <li><Link to="/next" activeClassName="active">Next</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }

}

export default FirstComponent;