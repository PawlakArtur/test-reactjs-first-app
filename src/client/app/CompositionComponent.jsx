import React from 'react';

class CompositionComponent extends React.Component {
    render() {
        return (
            <div>
                Message from above: "{this.props.children}"
            </div>
        );
    }

}

export default CompositionComponent;