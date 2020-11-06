import React, { Component } from 'react';
import Habit from './habit';
//import HabitAddForm from './habitAddForm';
//import Test from './test';


class Habits extends Component {
    /*
    state = {
        
        habits: [
            { id : 1, name: 'Reading', count: 0 },
            { id : 2, name: 'Running', count: 0 },
            { id : 3, name: 'Coding', count: 0 }
        ],
        
        tests: [ 
            { name : 'dreams'},
            { name : 'come'},
            { name : 'true'}
        ],

        simple: 'test'
    };
    */
    handleIncreasement = (event) => {
        /*
        console.log(event);
        //this.state.Habits.count++;
        //event.count++;
        const habits = [...this.state.habits];  // deep copy
        const index = habits.indexOf(event);
        habits[index].count++;
        this.setState({habits});
        */
       this.props.OnIncrease(event);
    };

    handleDecreasement = (event) => {
        /*
        console.log(event);
        const habits = [...this.state.habits];
        const index = habits.indexOf(event);
        if (habits[index].count > 0) {
            habits[index].count--;
        }
        this.setState({habits});
        */
       this.props.OnDecrease(event);
    };

    handleDelete = (event) => {
        /*
        const habits = this.state.habits.filter(item => item !== event);
        this.setState({habits});
        */
        this.props.OnDelete(event);
        /*
        The filter() method creates a new array with all 
        elements that pass the test implemented by the provided function.

        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(word => word.length > 6);
        
        expected output: Array ["exuberant", "destruction", "present"]
        */

    };

    handleAdd = (name) => {
        this.props.OnAdd(name);
        //console.log(name);
    }

    handleReset = (event) => {
        console.log(event);

    }



    render() {
        console.log("habits.jsx");
        return (
            <>                      
            { 
            //this.state.habits.map( (event) =>
            this.props.habitsProp.map( (event) =>            
                
                <Habit
                    key={event.id}
                    habitProp={event}
                    OnIncrease={this.handleIncreasement}
                    OnDecrease={this.handleDecreasement}
                    OnDelete={this.handleDelete}
                >
                </Habit>
                
            )}
            
            {/* {
            //this.state.tests.map( (event) =>
            this.props.testsProp.map( (event) =>
                <Test   
                key = {event.id}               
                testProp = {event}                               
                >

                </Test>
            )} */}
            
            
            </>
                /*
                The map() method creates a new array populated with the results of calling 
                a provided function on every element in the calling array.

                const array1 = [1, 4, 9, 16];
                
                const map1 = array1.map(x => x * 2);

                console.log(map1);
                
                expected output: Array [2, 8, 18, 32]

                */
             
        );
    }
}

export default Habits;