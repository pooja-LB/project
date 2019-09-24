 
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
 
class Dashboard extends Component {
   constructor(props) {
       super(props);
   }
   render() {
       let self = this;
       const { className, children } = self.props;
       const classes = classNames(className,"dash");
 
       return (
           <div className={classes}>
             
           </div>
       );
   }
}
 
Dashboard.propTypes = {
};
 
export default Dashboard;
