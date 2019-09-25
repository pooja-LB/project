
import React, { Component } from "react";
import './dashboard.css'
import { ConsumerContext } from './../../contextApi/context'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    renderlength = (type) => {
        let self = this;
        const { state } = self.props;
        let ContextValue = state.state;
        console.log("ContextValue", ContextValue)
        let length = ContextValue.value.filter(item => {
            return item.current_status_code == type
        }).length
        console.log("length", length)
        return length;
    }

    render() {
        let self = this;
        const { state } = self.props;
        const status = ["DEL", "INT", "OOD", "DEX", "NFI"];
        let { ContextValue, selectedStatus } = state.state
        console.log(selectedStatus, "selectedStatus")

        return (
            status.map((statusvalue) => {
                return (
                    <div className={"dash-card " + ((statusvalue === selectedStatus) ? "active-status" : "")}
                        onClick={e => {
                            state.updateSelectedStatus(statusvalue)
                        }} >
                        <p>{statusvalue}</p>
                        <h4>{this.renderlength(statusvalue)}</h4>
                    </div>
                )
            })
        )
    }
}

export default ConsumerContext(Dashboard);
