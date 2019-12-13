import React, { Component } from 'react'
import ListRenderer from './ListRenderer';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <ListRenderer />
                I am in todo App...
            </div>
        )
    }
}

export default TodoApp;