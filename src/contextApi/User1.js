/**
 * @version 0.0.1
 * @author Pooja Bannur <poojam@onedigilta.com>
 * @package  []
 */
import React, { Component } from "react";
import User2 from './User2';
import User3 from './User3';
import { MyProvider, MyContext } from "./context";
import ContextProvider from './ContextProvider'

class User1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: {
                name: "",
                place: "",
                Pin: ""
            },
            studentdata: [{
                class: "",
                institute: "",
                marks: ""
            }]
        }
    }


    render() {
        const self = this;
        let  userdata  = self.state;
        return (
            <ContextProvider value={userdata}>
                <User2 />
                <User3 />
            </ContextProvider>
        );
    }
}
export default User1;