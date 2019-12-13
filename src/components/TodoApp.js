import React, { Component } from 'react'
import ListRenderer from './ListRenderer';
import '../styles/TodoAppStyle.css';

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = { list: [], value: '' };
        this.inputRef = React.createRef();
    }

    getTitle = () => (
        <div className="row header pb-1">
            <div className="col-6 title" >
                Todo
            </div>
            <div className='col-6 d-flex justify-content-end' >
                <button type="button" className="btn btn-secondary btn-sm my-2">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );

    addElement = (element) => {
        const { list } = this.state;
        let tempList = list;
        tempList.push({
            label: element,
            complete: false
        });
        this.setState({ list: tempList });
    }

    addElementOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.setState({ value: '' });
            this.addElement(event.target.value);
        }
    }

    getInputField = () => {
        const { value } = this.state;
        return (
            <form className='py-2'>
                    <input
                        value={value}
                        className="input-class form-control-plaintext"
                        ref={this.inputRef}
                        autoFocus
                        onChange={e => this.setState({ value: e.target.value})}
                        onKeyPress={this.addElementOnEnter}
                    />
                </form>
        )
    }

    render() {
        const { list } = this.state;
        return (
            <div className="container body">
                {this.getTitle()}
                <div className="mx-3">
                    <ListRenderer dataList={list}/>
                    {this.getInputField()}
                </div>
            </div>
        )
    }
}

export default TodoApp;