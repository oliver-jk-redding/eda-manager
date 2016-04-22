import React, {Component} from 'react'
import AddTime from './AddTime'
import Chart from './Chart'

class TimeTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            cleans: [
                ['2016-04-12', 36],
                ['2016-04-14', 49],
                ['2016-04-18', 16],
                ['2016-04-19', 24],
                ['2016-04-20', 25],
                ['2016-04-21', 25],
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
            <div id='wrapper'>
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
                <Chart data = {this.state.cleans}/>
            </div>
        )
    }
}

export default TimeTable
