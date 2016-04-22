import React, {Component} from 'react'
import Drawer from './drawer'

class Dishwasher extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="quarter">
        <Drawer timer='10'/>
        <Drawer timer='10'/>
      </div>
      )
  }
}

export default Dishwasher
