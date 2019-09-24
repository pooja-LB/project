
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import './dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className, "dash");

        return (
            <div className={classes}>
                <div className="dash-card">
                    <p>DEL</p>
                    <h4>254</h4>
                </div>
                <div className="dash-card">
                    <p>DEL</p>
                    <h4>254</h4>
                </div>
                <div className="dash-card">
                    <p>DEL</p>
                    <h4>254</h4>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
};

export default Dashboard;
