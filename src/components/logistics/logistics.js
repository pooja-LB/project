
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import './logistics.css'

class Logistics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let self = this;
        const { className, children } = self.props;
        const classes = classNames(className, "table-dashboard");

        return (
            <table className={classes} cellpadding="5" cellspacing="5">
                    <thead>
                        <tr>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                            <td>Awr nu</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Row 1</td>
                            <td>Row 2</td>
                            <td>Row 3</td>
                            <td>Row 4</td>
                            <td>Row 5</td>
                            <td>Row 6</td>
                            <td>Row 7</td>
                            <td>Row 8</td>
                        </tr>
                    <tr>
                        <td>Row 1</td>
                        <td>Row 2</td>
                        <td>Row 3</td>
                        <td>Row 4</td>
                        <td>Row 5</td>
                        <td>Row 6</td>
                        <td>Row 7</td>
                        <td>Row 8</td>
                    </tr>
                    </tbody>

                </table>
           
        );
    }
}

Logistics.propTypes = {
};

export default Logistics;
