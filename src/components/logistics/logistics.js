
import React, { Component } from "react";
import classNames from 'classnames';
import { ConsumerContext } from './../../contextApi/context'
import './logistics.css'

class Logistics extends Component {
    constructor(props) {
        super(props);
    }
    renderRows = () => {
        const self = this;
        const { state } = self.props;
        let ContextValue = state.state;
        let stat = (!!state.state.selectedStatus) ? state.state.selectedStatus : "DEL";

        //  let selectedStatus=state
        console.log(state, "data")
        return ContextValue.value.map((data, index) => {
            console.log(data.carrier, "data")
            if (data.current_status_code == stat)
                return (
                    <tr onClick={e => {
                        state.renderScanData(data)
                    }}>
                        <td>#{data.awbno}</td>
                        <td>{data.carrier.toUpperCase()}</td>
                        <td>{data.from}</td>
                        <td>{data.to}</td>
                        <td>USPA</td>
                        <td> {data.pickup_date}</td>
                        <td>{data.expected_delivery_date}</td>
                        <td className={data.current_status_code == "DEL" ? "greened" : ""} >{data.current_status}</td>
                    </tr>)
        })
    }

    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className, "table-dashboard");

        return (
            <table className={classes} cellPadding="5" cellSpacing="5">
                <thead>
                    <tr>
                        <td>AWB NUMBER</td>
                        <td>TRANSPORTER</td>
                        <td>SOURCE</td>
                        <td>DESTINATION</td>
                        <td>BRAND</td>
                        <td>START DATE</td>
                        <td>ETD</td>
                        <td>STATUS</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>

            </table>

        );
    }
}

export default ConsumerContext(Logistics);
