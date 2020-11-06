import React, { Component } from 'react';

import './app.css';
import HabitAddForm from './components/habitAddForm';
//import Habit from './components/habit';
import Habits from './components/habits';
import Navbar from './components/navbar';
import Reset from './components/reset';

class App extends Component {
  state = {

        
    habits: [
        { id : 1, name: 'Reading', count: 0 },
        { id : 2, name: 'Running', count: 0 },
        { id : 3, name: 'Coding', count: 0 }
    ],
    
    tests: [ 
        { id : 4, name : 'dreams'},
        { id : 5, name : 'come'},
        { id : 6, name : 'true'}
    ]
  };

  handleIncreasement = (event) => {
    console.log(event);
    //this.state.Habits.count++;
    //event.count++;
    /*
    const incHabits = [...this.state.habits];  // deep copy
    const index = incHabits.indexOf(event);
    incHabits[index].count++;
    this.setState({habits : incHabits});
    */

    const increaseHabits = this.state.habits.map(item => {
        if (item.id === event.id) {
          return { ...event, count: event.count +1};
        }
          return item;
      });
    this.setState({ habits : increaseHabits });
  };

  handleDecreasement = (event) => {
    
    const decreaseHabits = this.state.habits.map(item => {
      if (item.id === event.id) {
        return {...event, count: (event.count) > 0 ? event.count -1 : 0};
      } 
        return item;
    });
    this.setState({ habits : decreaseHabits });
    
    console.log(event);
    /*
    const habits = [...this.state.habits];
    const index = habits.indexOf(event);
    if (habits[index].count > 0) {
        habits[index].count--;
    }
    this.setState({habits});
    */
  };

  handleDelete = (event) => {
    const habits = this.state.habits.filter(item => item !== event);
    this.setState({habits});
  };

  //function App() {

  getTotalCount() {
    const totalCount = this.state.habits.filter(item =>item.count >0).length;
    return totalCount;
  }

  handleAdd = (name) => {
    const addedHabits = [...this.state.habits, {id:Date.now(), name:name, count:0}];
    this.setState({habits : addedHabits});
    console.log(name);
  }

  reset = () => {
    const habits = this.state.habits.map( item => {
      
      if (item.count !== 0) {
        return {...item, count: 0};
      }
        return item;
    });
    this.setState({habits});
    
    
    console.log("reset");
    /*
    const habits = [...this.state.habits];
    // const resetHabits = habits.map( (habit) => habit.count = 0 );

    const resetHabits = habits.map( (habit) => {
      habit.count = 0;
      //return habit;
    });

    this.setState({resetHabits});
    */
  };


  render() {
    console.log("app.jsx");

    

    return( 
      <div> 
      {<Navbar
        totalCount = {this.getTotalCount()}
      />}
      <p/>
      
      {<HabitAddForm
                OnAdd={this.handleAdd}
            ></HabitAddForm>}
      <p/>
      {<Habits 
        habitsProp = {this.state.habits}
        OnIncrease = {this.handleIncreasement}
        OnDecrease = {this.handleDecreasement}   
        OnDelete = {this.handleDelete}
        // OnAdd = {this.handleAdd}
        testsProp = {this.state.tests}
      />}

      
      {<Reset
        onReset = {this.reset}
      />}
      
      </div>
    )
  };
}
export default App;
