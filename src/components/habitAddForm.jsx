import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {

    inputRef = React.createRef();
    

    onSubmit = (event) => {
        event.preventDefault();
        //console.log(event);
        //console.log(this.inputRef.current.value);
        
        const name = this.inputRef.current.value;
        name && this.props.OnAdd(name);
        this.inputRef.current.value = '';
    };

    // onSub = function onS(event) {
    //     event.preventDefault();
    //     console.log(this.test.current.value);
    // }


    render() {
        console.log("habitAddForm.jsx");
        return (
            <form className='add-form' onSubmit={this.onSubmit}>
                <input
                ref={this.inputRef} 
                className='add-input' 
                placeholder='Habit' 
                size="20"></input>
                <button className='habit-add'>ADD</button>
            </form>
        );
    }
}

export default HabitAddForm;