import React, {Component} from 'react'

class Drawer extends Component{
  constructor(props){
    super(props)
    this.state = {on: false}
  }

  turnOn() {
    this.setState({on: true})
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <p onClick={this.turnOn.bind(this)}>I'm a drawer</p>
      </div>
      )
  }
}

export default Drawer