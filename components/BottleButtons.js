import React, {Component} from 'react'

class BottleButtons extends Component {
    constructor(props){
        super(props)
        this.state = {
            numBottles : 0
        }
    }

    addBottle(){
        this.setState({
            numBottles: this.state.numBottles + 1
        })
    }

    removeBottle(){
        if(this.state.numBottles > 0){
            this.setState({
                numBottles: this.state.numBottles - 1
            })
        }
    }

    render() {
        var botDisplay = 'bottleDisplay ' + this.props.type

        return(
            <div className='bottleWrapper'>
                <div className='bottleTitle'>{this.props.type}</div>
                <div className={botDisplay}><span className='bottleCounter'>x {this.state.numBottles}</span></div>
                <div>
                    <button className='addBottle' onClick={this.addBottle.bind(this)}>Add Bottle</button>
                    <button className='removeBottle' onClick={this.removeBottle.bind(this)}>Remove Bottle</button>
                </div>
            </div>
        )
    }
}

module.exports = BottleButtons
