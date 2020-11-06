import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    state = {
        totalCount : 0
    };
    
    render() {
        console.log("navbar.jsx");
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="counter">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;