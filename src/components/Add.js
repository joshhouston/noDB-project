import React, {Component} from 'react';
import axios from 'axios'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            price: 0,
            ios: 11
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() {
        return (
            <form className='myForm' 
                onSubmit={e => {e.preventDefault();
                axios
                    .post('api/tweakWishlist', {
                        name: this.state.name,
                        image: this.state.image
                    })
                    .then(res => {
                        this.props.changeView('wishlist')
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }}>
                <input name='name' onChange={this.handleChange}/>
                <input name='image' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Add