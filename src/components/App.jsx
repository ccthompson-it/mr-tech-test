import React, { Component, Fragment } from 'react'
import '../styles.css';
import tshirt from '../classic-tee.jpg'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <div id="nav-bar"></div>
        <div id="card-box">
          <img id="card-image" src={tshirt} alt="plain white t-shirt" />
          <div id="card-body">
            <h1 id="card-header">Classic Tee</h1>
            <h2 id="card-price">$75.00</h2>
            <p id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim odio ornare elit rutrum, eget maximus ante congue. Sed rutrum, velit eget dictum ornare, orci purus luctus risus, a sollicitudin turpis libero et quam. Sed mattis metus sit amet lorem sagittis efficitur. Sed accumsan dolor ac fringilla eleifend.</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
