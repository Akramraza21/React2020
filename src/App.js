import React, {Component} from 'react';
import './App.css';
import FormHandler from './Ninjas/Ninjas'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      ninjas:[  {
        name:'Akash',
        age:'31',
        gender:'Male'
    }]
    }
  }

  stateInserter = (stateData) => {
    const newState = [...this.state.ninjas, stateData]
    this.setState({ninjas:newState
    })
  }
  stateDataDeletion = (Data) => {
    const newState = [...this.state.ninjas]
    newState.splice(Data,1)
    this.setState({ninjas:newState})

  }
  
  render () {
    return (
      <div className="App">
       < FormHandler stateData={this.stateInserter} states={this.state} 
       deleteData={this.stateDataDeletion}/>
      </div>
    );
  }
  
}

export default App;
