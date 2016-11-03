import React from 'react';
import MessageComponent from './MessageComponent.jsx';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            user: 'Artur'
        }
        this.changeLogin = this.changeLogin.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeLogin() {
        this.setState(prevState => ({
            login: !prevState.login
        }));
    }
    changeUser() {
        this.setState(prevState =>({
            user: event.target.value
        }));
    }

    render() {
        return (
            <div className="warning">
                <button onClick={this.changeLogin}>
                    {this.state.login ? 'Logout' : 'Login'}
                </button>
                <input type="text" onChange={this.changeUser}/>
                <MessageComponent isLogin={this.state.login} user={this.state.user}/>
            </div>
        );
    }
}

export default Greeting