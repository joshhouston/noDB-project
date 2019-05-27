import React, {Component} from 'react'
import axios from 'axios'
import CurrentTweaks from './CurrentTweaks'
import Edit from './Edit'

class TweakWishlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wishlist: [],
            loading: true,
            error: '',
            tweakName: '',
            price: 0,
            ios: ''
            
        }
        this.updateWishlist = this.updateWishlist.bind(this)
    }
    componentDidMount() {
        axios
            .get('/api/tweakWishlist')
            .then(response => {
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

    editTweak(name) {
        this.setState({edit: true, chi: name})
      }
    
      toggleEdit() {
        this.setState({edit: !this.state.edit})
      }

    

    render() {
        const {wishlist} = this.state;
        return(
            <section className="wishlistMain">
                {this.state.loading ? <p>Loading</p> : null}
                {this.state.error}
                {wishlist.map((tweak, index) => {
                    
                    this.state.tweakName = tweak.name
                    // console.log(this.state.tweakName)
                    // <CurrentTweaks key={index} wishlist={wishlist} updateWishlist={this.updateWishlist} />
                    return(
                        <div className="tweakCard" key={index}>
                            <img src={tweak.image} alt=""/>
                            
                            <div className="tweakInfo">
                                <h1>Name: {tweak.name}</h1>
                                <p>Price: {tweak.price}</p>
                                <p>Compatability: {tweak.ios}</p>
                            </div>

                            <div className="tweakButtons">
                                <button
                                    onClick={() => {
                                        axios.delete("/api/tweakWishlist/" + tweak.name).then(response => {
                                            this.setState({wishlist: response.data})
                                        })
                                    }}
                                >X</button>
                                <button
                                    onClick={() => this.editTweak(tweak.name)}
                                >edit</button>
                            </div>
                        </div>
                        
                    )
                    })}
                    <div>
                        {this.state.edit === true ? (
                            <Edit 
                            tweakName={this.state.tweakName}/>
                        ) : null }
                        
                    </div>
                    
            </section>
        )
        
    }
}

export default TweakWishlist