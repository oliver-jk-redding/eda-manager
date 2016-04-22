import React, {Component} from 'react'
import Teacup from './Teacup'

class HotWaterQueue extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cupOwners: [
            'Tony',
            'James'
          ]
        }
    }

    addCup() {
      if(this.refs.newCupOwner.value) {
        var newCupOwners = this.state.cupOwners
        newCupOwners.push(this.refs.newCupOwner.value)

        this.setState({
          cupOwners: newCupOwners
        })
      }
    }

    removeCup(cupToRemove) {
      var oldCupOwners = this.state.cupOwners.filter(function(cupOwner) {
        return cupOwner !== cupToRemove
      })

      this.setState({
        cupOwners: oldCupOwners
      })
    }

    render() {
        return(
            <div>
                <h1>Hot Water Queue</h1>
                <div>
                  <input ref="newCupOwner" type="text" placeholder="Enter your name"/>
                  <button onClick={this.addCup.bind(this)}>Order Tea</button>
                </div>
                {this.state.cupOwners.map(function(owner, i) {
                  return <Teacup name={owner} key={i} callback={this.removeCup.bind(this)}/>
                }.bind(this))}
            </div>
        )
    }
}



export default HotWaterQueue




