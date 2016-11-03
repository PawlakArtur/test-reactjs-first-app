import React from 'react';

class Message extends React.Component {
    render() {
        const isLogin = this.props.isLogin;
        const user = this.props.user;
        let message = null;
        if(isLogin) {
            message = <h3>Hello {user}</h3>
        } else {
            message = <h3>Bye {user}</h3>
        }
        return (
            <div>{message}</div>
        )
    }
}

export default Message