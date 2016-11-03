import React from 'react';

class NextComponent extends React.Component {
    render() {
        const lessons = [
            'Installation',
            'Hello World',
            'Introducting JSX',
            'Rendering Elements',
            'Components and Props',
            'State and Lifecycle',
            'Handling Events',
            'Conditional Rendering',
            'Lists and Keys',
            'Forms - Example'
        ];
        const lessonsList = lessons.map((lesson) =>
            <li key={lesson.toString()}>{lesson}</li>
        );
        return (
            <div>
                <ul>{lessonsList}</ul>
            </div>
        );
    }

}

export default NextComponent;