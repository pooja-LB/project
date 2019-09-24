import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header'
import Timeline from './components/timeline/timeline'
import Logistics from './components/logistics/logistics'
import { getData } from './api/index';
import { MyProvider, MyConsumer } from './contextApi/context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      changeValue: (newval) => this.changeFilter(newval),
      selectedStatus :'',
      scanArray: []
    };
    
  }
  componentDidMount() {
    getData().then(data => {

      console.log(data, "data")
      //action 
      this.setState({
        ...this.state,
        value: data
      })
    });
  }

  callGetDATA = async () => {
    let data = getData();
  }

  updateSelectedStatus =(status)=>{
    console.log("idddd" ,status)
    this.setState({
      ...this.state ,
      selectedStatus : status
    })
  }

  renderScanData = (data) => {
    console.log("scan", data.scan)
    this.setState({
      ...this.state,
      scanArray: data.scan
    })
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
      <MyProvider value={{
        state : this.state,
        updateSelectedStatus: this.updateSelectedStatus,
        renderScanData: this.renderScanData
        }}>
        {this.props.children}
        <div className="header">
          <div className="text-center bg-light">
            <Header />
          </div>
        </div>
        <div className="body-content">
          <div className="dashboard">
            <Dashboard />
          </div>

          <div className="logs">
            <div className="timeline">
              <Timeline />
            </div>
            <div className="tabular-data">
              <div className="inner-tabular">
                <Logistics />
              </div>
            </div>
          </div>
        </div>
      </MyProvider>
    )
  }
}

export function ConsumerContext(Component) {
  return function WrapperComponent(props) {
    return (
      <MyConsumer>
        {state => <Component {...props} 
        state={state}
        // ContextValue={state.state} updateselectedStatus={state.updateselectedStatus}
         />}
      </MyConsumer>
    );
  };
}

export default App;
