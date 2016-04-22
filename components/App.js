import React, {Component} from 'react'
import Dishwasher from './Dishwasher'
import Fridge from './Fridge'
import TimeTable from './TimeTable'
import HotWaterQueue from './HotWaterQueue'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Fridge />
        <TimeTable />
        <Dishwasher />
        <HotWaterQueue />
      </div>
      )
  }
}

export default App
