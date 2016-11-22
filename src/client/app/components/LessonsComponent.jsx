import React from 'react';

class Lessons extends React.Component {
    render() {
        const lessons = [
            'Quick Start',
            '---',
            'Installation',
            'Hello World',
            'Introducting JSX',
            'Rendering Elements',
            'Components and Props',
            'State and Lifecycle',
            'Handling Events',
            'Conditional Rendering',
            'Lists and Keys',
            'Forms',
            'Lifting State Up',
            'Composition vs Inheritance',
            'Thinking in React',
            '----',
            'Advanced Guides',
            '-----',
            'JSX in Depth',
            'Typechecking With PropTypes',
            'Refs and the DOM',
            'Uncontrolled Components',
            'Optimizing Performance',
            'React Without ES6',
            'React Without JSX',
            'Reconciliation',
            'Contex',
            'Web Components',
            '------',
            'Wes Bos - Learn Redux',
            '1, 2, 3, 4, 5, 6, 7, 8'

        ];
        const lessonsList = lessons.map((lesson) =>
            <li key={lesson.toString()}>{lesson}</li>
        );
        return (
            <div>
                <h2>Completed React documentation</h2>
                <ul>{lessonsList}</ul>
            </div>
        );
    }
}

export default Lessons