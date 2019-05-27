import React, {Component} from 'react'
import Header from './components/Header'
import Add from './components/Add'
import CurrentTweaks from './components/CurrentTweaks'
import TweakWishlist from './components/TweakWishlist'
import Edit from './components/Edit'
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'wishlist',
      wishlist: [],
      edit: false,
      twee: ''
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
         <nav className='navMain'>

         <button
            className='addTweak'
            className={this.state.view === "add" ? 'current' : ''}
            onClick={() => this.setState({view: 'add'})}
           >
             +
           </button>
           
            {/* Wishlist button */}
           <button
            className={this.state.view === 'wishlist' ? "current" : ''}
            className="navButtons"
            onClick={() => this.setState({view: 'wishlist'})}
           >
             Wishlist
           </button>
           
           {/* My Tweaks Button */}
           <button 
           className="navButtons"
           onClick={() => this.setState({view: 'mytweaks'})}>
             My Tweaks
           </button>

          
          </nav>
          
          {/* Add Tweak Button */}

          {this.state.view === 'wishlist' ? (
            <TweakWishlist twee={this.twee}/>
          ) : this.state.view === 'add' ? (
          <Add changeView={this.changeView} /> )
            : (<CurrentTweaks />)
          } 
        </div>
      </div>
    )
  }
}
export default App