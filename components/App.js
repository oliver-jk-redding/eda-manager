import React, {Component} from 'react'
import Dishwasher from './dishwasher'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h2>Milk</h2>
        <h2>Tea</h2>
        <h2>Cleaning</h2>
        <Dishwasher />
      </div>
      )
  }
}

export default App