import React, {Component} from 'react'
import axios from 'axios'


class CurrentTweaks extends Component {
    constructor(props){
        super(props)
        this.state = {
            myTweaks: [],
            
        }
        this.updateCurrentTweaks = this.updateCurrentTweaks.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/currentTweaks')
            .then(response =>{
                this.setState({myTweaks: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: 'no gud'})
            })
    }

    updateCurrentTweaks(myTweaks) {
        this.setState({myTweaks: myTweaks})
    }

    // editMessage(id, text) {
    //     console.log('editMessage:', id, text)
    //     axios.put(url + `/${id}`, {text}).then(response => {
    //         this.setState({message: response.data})
    //     })
    // }

    
    render(){
        const {myTweaks} = this.state
        return (
            <article>
                {myTweaks.map((tweak,index) => {
                    return (
                        <div key={index}>
                            <h3>{tweak.name}</h3>
                            <button
                                onClick={() => {
                                    axios.delete("/api/currentTweaks/" + tweak.name).then(response => {
                                        this.setState({myTweaks: response.data})
                                    })
                                }}
                            >delete</button>
                        </div>
                    )
                })}
            </article>
            )
    }
}

export default CurrentTweaks