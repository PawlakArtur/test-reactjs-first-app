import React from 'react';
import CompositionComponent from './CompositionComponent.jsx';

class NextComponent extends React.Component {
    render(props) {
        return (
            <div>
                <CompositionComponent>
                    <span>Test of Composition</span>
                </CompositionComponent>
            </div>
        );
    }

}

export default NextComponent;