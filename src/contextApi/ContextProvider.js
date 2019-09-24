import React from "react";
import { MyProvider, MyContext } from "./context";


class ContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            changeValue: (newval) => this.changeFilter(newval)
        };
    }
    changeFilter = (value) => {
        this.setState({
            ...this.state,
            value
        })
        console.log(this.state.value, 'state.value')
    }
    render() {
        return (
            <MyProvider value={this.state}>
                {this.props.children}
                {console.log(this.state.value, "valueee")}
            </MyProvider>
        );
    }
}

export default ContextProvider;
