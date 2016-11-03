import React from 'react';

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello {this.props.name}</h2>
            </div>
        );
    }

}

export default FirstComponent;