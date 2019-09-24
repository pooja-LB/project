/**
 * @version 0.0.1
 * @author Pooja Bannur <poojam@onedigilta.com>
 * @package  []
 */
import React, { Component } from "react";
import { MyConsumer } from "./context";
import User3 from "./User3"
class User2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MyConsumer>
                {filterfunc => (
                    <div>
                        {console.log("kkkk", filterfunc)}

                        {/* Enter place:<input type="text"
                            value={filterfunc.value.place}
                            onChange={e => {
                                filterfunc.changeValue({
                                    ...fliterfunc.value,
                                    place: e.target.value
                                })
                            }} /> */}

                        Enter Place:<input type="text"
                            value={filterfunc.value.place}
                            onChange={e => {
                                filterfunc.changeValue({
                                    ...filterfunc.value,
                                    place: e.target.value
                                })
                            }} />
                        Enter name:<input type="text"
                            value={filterfunc.value.name}
                            onChange={e => {
                                filterfunc.changeValue({
                                    ...filterfunc.value,
                                    name: e.target.value
                                })
                            }} />

                        Enter Pin:<input type="text"
                            value={filterfunc.value.pin}
                            onChange={e => {
                                filterfunc.changeValue({
                                    ...filterfunc.value,
                                    pin: e.target.value
                                })
                            }} />

                  

                       

                        {console.log("name", filterfunc.value.place)}
                    </div>
                    
                )
                }
            </MyConsumer>
        );
    }
}
export default User2
