import React, {Component} from 'react'

class Drawer extends Component{
  constructor(props){
    super(props)
    this.state = {
      on: false,
      clean: false,
      timeLeft: this.props.timer,
    }
  }

  turnOn() {
    this.setState({on: true})
    this.setState({timeLeft: this.props.timer})
    this.startTimer()
  }

  turnOff() {
    this.setState({on: false})
    this.setState({clean: true})
  }

  putAwayDishes() {
    this.setState({clean: false})
  }

  startTimer() {
    var intID = window.setInterval(() => {
      if(this.state.timeLeft > 0) {
        console.log(this.state.timeLeft)
        this.setState({timeLeft: this.state.timeLeft -1})
      }
      else {
        this.setState({clean: true})
        this.turnOff()
        console.log(this.state)
        clearInterval(intID)
      }
    }, 100)
  }

  render(){
    return(
      <div className={this.state.clean + ' drawer'}>
        <button className='toggleOn' onClick={this.turnOn.bind(this)}>On</button>
        <button className={' toggle'} onClick={this.putAwayDishes.bind(this)}>Empty</button>
        <div>{this.state.timeLeft}</div>
      </div>
      )
  }
}

export default Drawer