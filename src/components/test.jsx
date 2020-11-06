import React, { Component } from 'react';

class Test extends Component {
    
    
    render() {
        const test = this.props.testProp.name;
        //const test = this.props.testProp;
        return ( 
        <li>
            <span className="test-id">{test}</span>
        </li>
            
        );
    }
}

export default Test;