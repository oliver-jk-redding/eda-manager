import React, {Component} from 'react'
import Drawer from './drawer'

class Dishwasher extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Drawer />
        <Drawer />
      </div>
      )
  }
}

export default Dishwasher