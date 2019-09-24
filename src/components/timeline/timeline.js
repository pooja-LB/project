
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import './timeline.css'

class Timeline extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className, "dash");

        return (
            <div className={classes}>
                <div className="timelines">
                    <ul className="status">
                        <li className="timeline-list">DELIVERED</li>
                        <li className="timeline-list">OUT FOR DELIVERY</li>
                        <li className="timeline-list">UN-DELIVERED</li>
                        <li className="timeline-list">ARRIVED AT DESTINATION</li>
                    </ul>
                </div>

            </div>
        );
    }
}

Timeline.propTypes = {
};

export default Timeline;
