 
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
 
class Logistics extends Component {
   constructor(props) {
       super(props);
   }
   render() {
       let self = this;
       const { className, children } = self.props;
       const classes = classNames(className,"dash");
 
       return (
           <div className={classes}>
               {children}
               Logistics
           </div>
       );
   }
}
 
Logistics.propTypes = {
};
 
export default Logistics;
