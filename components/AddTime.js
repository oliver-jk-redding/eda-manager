import React, {Component} from 'react'


class AddTime extends Component {
    constructor(props){
        super(props)

    }

    addClean() {

        var clean = [this.refs.date.value, this.refs.time.value]

        this.props.callback(clean)
    }

    render() {
        return(
            <div>
                <input ref='date' type='date'/>
                <input ref='time' type='number'/>
                <button onClick={this.addClean}>Add Time</button>
            </div>
        )
    }
}


export default AddTime
