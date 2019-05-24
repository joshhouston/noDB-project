import React, {Component} from 'react'
import axios from 'axios'

class CurrentTweaks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    render(){
        return (
            <div>
                <h1>Current Tweaks</h1>
            </div>
        )
    }
}

export default CurrentTweaks