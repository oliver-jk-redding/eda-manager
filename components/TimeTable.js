import React, {Component} from 'react'
import AddTime from './AddTime'

class TimeTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            cleans: [
                    ['April 21', 25],
                    ['April 22', 28],
                    ['April 23', 23]
                ]
        }
    }
    addClean(clean){
        var newCleans = this.state.cleans
        newCleans.push(clean);
        this.setState({
            cleans: newCleans
        })
    }
    removeClean(date){
        var newCleans = this.state.cleans.filter(function(clean){
            return clean[0] !== date
        })
        this.setState({
            cleans: newCleans
        })
    }

    render(){
        return (
            <div>
                <AddTime callback={this.addClean.bind(this)}/>
                <div>
                    <div>Date</div>
                    <div>Time</div>
                </div>
                {this.state.cleans.map(function(clean){
                    return(
                            <div>
                                <div>{clean[0]}</div>
                                <div>{clean[1]}</div>
                            </div>
                        )
                })}
            </div>
        )
    }
}

export default TimeTable
