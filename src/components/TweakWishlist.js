import React, {Component} from 'react'
import axios from 'axios'
import CurrentTweaks from './CurrentTweaks'

class TweakWishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishlist: [],
            loading: true,
            error: ''
        }
        this.updateWishlist = this.updateWishlist.bind(this)
    }
    componentDidMount() {
        axios
            .get('/api/tweakWishlist')
            .then(response => {
                this.setState({wishlist: response.data})
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false, error: 'eees no gud'})
            })
    }

    updateWishlist(newTweaks){
        this.setState({wishlist: newTweaks})
    }

    render() {
        const {wishlist} = this.state;
        return(
            <section>
                {this.state.loading ? <p>Loading</p> : null}
                {this.state.error}
                {/* {wishlist.map((wishlist, index) => (
                    <TweakWishlist key={index} wishlist={wishlist} updateWishlist={this.updateWishlist} />
                ))} */}
            </section>
        )
    }
}

export default TweakWishlist