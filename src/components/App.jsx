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
            <h1 className="text-dark" id="card-header">Classic Tee</h1>
            <h2 className="text-dark" id="card-price">$75.00</h2>
            <p className="text-light" id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim odio ornare elit rutrum, eget maximus ante congue. Sed rutrum, velit eget dictum ornare, orci purus luctus risus, a sollicitudin turpis libero et quam. Sed mattis metus sit amet lorem sagittis efficitur. Sed accumsan dolor ac fringilla eleifend.</p>
            <p className="text-light" id="card-size">SIZE<span className="text-red">*</span><span className="text-dark"> S</span></p>
            <div id="card-buttons">
              <button className="size-button ">S</button>
              <button className="size-button">M</button>
              <button className="size-button">L</button>
            </div>
            <button id="submit-button">Add to Cart</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
