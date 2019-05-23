import React, {Component} from 'react'
import axios from 'axios'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            price: '',
            ios: '',
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }
    render() {
        return (
            <form
            onSubmit ={e => {
                e.preventDefault()
                axios
                    .post("/api/tweakWishlist", {
                        name: this.state.name,
                        image: this.state.image,
                        price: this.state.price,
                        ios: this.state.ios
                    })
                    .then(response => {
                        console.log(response)

                    })
                    .catch(error => {
                        console.log(error)
                    })
            }} 
            >
                <input name="name" onChange={this.handleChange}/>
                <input name="image" onChange={this.handleChange}/>
                <input name="price" onChange={this.handleChange}/>
                <input name="ios" onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Add