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
      <div className="whole">
        <Fridge className="quarter" />
        <TimeTable className="quarter" />
        <Dishwasher className="quarter" />
        <HotWaterQueue className="quarter" />
      </div>
      )
  }
}

export default App
