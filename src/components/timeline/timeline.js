
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { ConsumerContext } from './../../contextApi/context'
import './timeline.css'

class Timeline extends Component {
    constructor(props) {
        super(props);
    }
    renderTimeline = () => {
        const self = this;
        const { state } = self.props;
        let { ContextValue, scanArray } = state.state;
        console.log(scanArray, "ContextValue")

        return (
            scanArray.map((data, index) => {
                //console.log(data, "scanarray")
                return (
                    <li key={index} className={"timeline-list " + ((data.status_detail) == 'DELIVERED' ? " active-blue" : "")} >
                        {console.log(data.status_detail, "dddddd")}
                        <div className={"col-md-8 clearfix " + ((data.status_detail) == 'DELIVERED' ? "greened" : "")}>
                            {data.status_detail.toLowerCase()}
                        </div>
                        <div className={"col-md-4 clearfix " + ((data.status_detail) == 'DELIVERED' ? "greened" : "")}>
                            {data.time}
                        </div>
                    </li >
                )
            })
        )
    }
    render() {
        let self = this;
        const { className, state } = self.props;
        const { scanArray } = state.state;
        const classes = classNames(className, "dash");
        console.log(scanArray, "fgfggf")
        return (
            <div className={classes}>
                <div className="timelines">
                    {scanArray == "" ?
                        (<div></div>) :
                        (<ul className="status">
                            {this.renderTimeline()}
                        </ul>)
                    }
                </div>

            </div >
        );
    }
}


export default ConsumerContext(Timeline);
