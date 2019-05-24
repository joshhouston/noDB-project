import React, {Component} from 'react'
import Header from './components/Header'
import Add from './components/Add'
import CurrentTweaks from './components/CurrentTweaks'
import TweakWishlist from './components/TweakWishlist'
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'wishlist'
    }
    this.changeView = this.changeView.bind(this)
  }
  changeView(newView) {
    this.setState({view: newView})
  }
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <div>
         <nav>
           <button
            className={this.state.view === 'wishlist' ? "current" : ''}
            onClick={() => this.setState({view: 'wishlist'})}
           >
             Wishlist
           </button>
           <button onClick={() => this.setState({view: 'mytweaks'})}>
             My Tweaks
           </button>
          </nav>
          <button
            className={this.state.view === "add" ? 'current' : ''}
            onClick={() => this.setState({view: 'add'})}
           >
             +
           </button>
          {this.state.view === 'wishlist' ? (
            <TweakWishlist />
          ) : this.state.view === 'add' ? (
          <Add changeView={this.changeView} /> )
            : (<CurrentTweaks/>)
          } 
        </div>
      </div>
    )
  }
}
export default App