/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class DynamicCounter extends Component {

    // state = { counter: 0 };
    // this.state.counter + 1;

    constructor(props){
        super(props);

        this.state = {
            counter: 0
        };
    }
    
    increment = () => {
        let current = this.state.counter;
        this.setState({counter: current + 1});
    }

    decrement = () => {
        let current = this.state.counter;
        this.setState({counter: current - 1});
    }
    
    render() {
        let {counter} = this.state;

        return (
            <div>
                <button onClick={this.decrement}>-1</button>

                <span style={{color: getColor(this.state.counter, this.props.max), padding: "20px"}}> 
                    {this.props.label}: {counter} 
                </span>

                <button onClick={this.increment}>+1</button>
            </div>
        );
    }

}


const getColor = (counter, max) => {
    if (counter >= max) {
        return 'green';
    } else {
        return 'red';
    }
};