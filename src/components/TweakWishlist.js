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
                console.log(response.data)
                this.setState({wishlist: response.data, loading: false})
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
                <h1>test wishlist</h1>
                {wishlist.map((tweak, index) => {
                    // <CurrentTweaks key={index} wishlist={wishlist} updateWishlist={this.updateWishlist} />
                    return(
                        <div key={index}>
                            <h1>{tweak.name}</h1>
                            <img src={tweak.image} alt=""/>
                        </div>
                    )
                    })}
                
            </section>
        )
    }
}

export default TweakWishlist