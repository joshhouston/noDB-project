import React, {Component} from 'react'
import axios from 'axios'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tweakName: ''
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    editTweaks(e) {
        e.preventDefault();
        axios.put(`/api/tweakWishlist/${this.props.tweakName}`, {
            name: this.state.editName
        }).then(response => {this.props.updateWishlist(response.data)
        this.props.toggleEdit()
        })
    }



    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <form action="">
                    <h1>Edit: {this.props.tweakName}</h1>
                    <input name="editName"
                        value={this.state.editName}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button
                        onClick={e => {
                            this.editTweaks(e)
                        }}
                    >Sub</button>
                </form>
            </div>
        )
    }
}

export default Edit
