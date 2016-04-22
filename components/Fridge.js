import React, {Component} from 'react'
import BottleButtons from './BottleButtons'

class Fridge extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='fridge quarter'>
                <div className='fridgeTitle'>{this.props.name}</div>
                <BottleButtons type='Milk' />
                <BottleButtons type='Soy' />
                <BottleButtons type='Almond' />
            </div>
        )
    }
}

module.exports = Fridge
