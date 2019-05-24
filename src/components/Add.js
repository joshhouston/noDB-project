import React, {Component} from 'react';
import axios from 'axios'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() {
        return (
            <form class='myForm' onSubmit={e => e.preventDefault()}>
                <input name='name' onChange={this.handleChange}/>
                <input name='image' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Add