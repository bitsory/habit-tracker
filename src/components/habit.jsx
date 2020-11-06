import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    state = {
        count: 0,
    };

   

    handleIncreasement = () => {
        this.props.OnIncrease(this.props.habitProp);
        //this.props.habitProp.count++;
    }

    handleDecreasement = () => { 
        this.props.OnDecrease(this.props.habitProp);
    }

    handleDelete =() => {
        this.props.OnDelete(this.props.habitProp);
    }

    render() {
        console.log(`habit.jsx : ${this.props.habitProp.name}`);
        //console.log(this.props);
        
        //const habitName = this.props.habitProp.name;
        // const habitCount = this.props.habitProp.count;
        const { name, count } = this.props.habitProp;
        //const test = this.props.testProp;
        return ( 
        <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" 
                onClick={this.handleIncreasement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" 
                onClick={this.handleDecreasement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete"
                onClick={this.handleDelete}>
                <i className="fas fa-trash-alt"></i>                
            </button>
            {/* <span className='test'>{test}</span> */}

        </li>
        );
    }
}

export default Habit;