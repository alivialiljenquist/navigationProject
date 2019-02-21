import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    render() {
        return (
            <div className="links">
                <div className="nav-link"><NavLink exact to="/">Home</NavLink></div>
                <div className="nav-link"><NavLink exact to="/toggle">Toggle</NavLink></div>
                <div className="nav-link"><NavLink exact to="/font-sizer">Font Sizer</NavLink></div>
                <div className="nav-link"><NavLink exact to="/counter">Counter</NavLink></div>
            </div>
        )
    }
}