import React, {Component} from 'react'


class AddTime extends Component {
    constructor(props){
        super(props)

    }

    addClean() {
        if(this.refs.time.value && this.refs.date.value){
            var clean = [this.refs.date.value, this.refs.time.value]

            this.props.callback(clean)
        }
    }

    render() {
        return(
            <div className='addCleanWrapper'>
                <input className='date' ref='date' type='date'/>
                <input className='time' ref='time' type='number'/>
                <button className='addCleanButton' onClick={this.addClean.bind(this)}>Add Time</button>
            </div>
        )
    }
}


export default AddTime
