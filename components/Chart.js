import React, {Component} from 'react'

class Chart extends Component {

    constructor(props){
        super(props)

    }

    makeGraph(){
        var data = this.props.data.map(elt => elt[1])

        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("margin-top", "auto")
            .style("width", "20px")
            .style("height", function(d) {
                return d * 5 + "px";
            })
            .text(function(d) {
                return d;
            });

    }

    render() {
        return(
            <div className='chart'>
                <p onClick={this.makeGraph.bind(this)}>Make Chart</p>
            </div>
        )
    }
}


export default Chart
