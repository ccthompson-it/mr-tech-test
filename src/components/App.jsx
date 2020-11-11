import React, { Component, Fragment } from 'react'
import '../styles.css';
import tshirt from '../classic-tee.jpg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false,
      currentSize: null,
      small: 0,
      med: 0,
      large: 0
    }
  }

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown })
  }

  handleSubmit = () => {
    const { currentSize } = this.state
    if (!currentSize) {
      alert("Please Choose a Size!")
    }
    else {
      this.setState({ [currentSize]: this.state[currentSize] += 1 })
      this.setState({ currentSize: null })
    }
  }

  handleSize = (size) => {
    this.setState({ currentSize: size })
  }

  makeDropdownCard = (size) => {
    if (this.state[size] > 0) {
      return (
        <div className="dropdown-card">
          <img className="dropdown-card-image" src={tshirt} alt="plain white t-shirt" />
          <div className="dropdown-card-body">
            <p>Classic Tee</p>
            <p>{this.state[size]}x $75.00</p>
            <p>Size: {size}</p>
          </div>
        </div>)
    }
  }

  render() {
    const { dropdown, currentSize, small, med, large } = this.state
    return (
      <Fragment>
        <div id="nav-bar">
          <div id="dropdown">
            <p
              id="dropdown-text"
              className={dropdown ? 'dropdown-active text-dark' : 'text-light'}
              onMouseEnter={this.toggleDropdown}
              onMouseLeave={this.toggleDropdown}
            >
              My Cart ({small + med + large})
            </p>
            {dropdown && <div id="dropdown-content">
              {small + med + large === 0 && <p>There is nothing in the Cart!</p>}
              {this.makeDropdownCard('small')}
              {this.makeDropdownCard('med')}
              {this.makeDropdownCard('large')}
            </div>}
          </div>
        </div>


        <div id="card-box">
          <img id="card-image" src={tshirt} alt="plain white t-shirt" />

          <div id="card-body">
            <h1 className="text-dark" id="card-header">Classic Tee</h1>

            <h2 className="text-dark" id="card-price">$75.00</h2>

            <p className="text-light" id="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim odio ornare elit rutrum, eget maximus ante congue. Sed rutrum, velit eget dictum ornare, orci purus luctus risus, a sollicitudin turpis libero et quam. Sed mattis metus sit amet lorem sagittis efficitur. Sed accumsan dolor ac fringilla eleifend.</p>

            <p className="text-light" id="card-size">SIZE<span className="text-red">*</span><span className="text-dark"> S</span></p>

            <div id="card-buttons">
              <button
                className={(currentSize === 'small' && 'size-active') + " size-button"}
                onClick={() => this.handleSize('small')}>
                S
              </button>

              <button
                className={(currentSize === 'med' && 'size-active') + " size-button"}
                onClick={() => this.handleSize('med')}>
                M
              </button>

              <button
                className={(currentSize === 'large' && 'size-active') + " size-button"}
                onClick={() => this.handleSize('large')}>
                L
              </button>
            </div>

            <button id="submit-button" onClick={this.handleSubmit}>Add to Cart</button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
