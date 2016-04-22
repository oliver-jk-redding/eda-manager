import React, {Component} from 'react'
class Teacup extends Component {
    constructor(props) {
        super(props)
    }

    removeMe() {
      this.props.callback(this.props.name)
    }

    render() {
        return(
            <div className="teacup" onClick={this.removeMe.bind(this)}>
              <div className="teacup-name">{this.props.name}</div>
            </div>
        )
    }
}



export default Teacup