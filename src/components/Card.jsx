import React, { Component } from 'react'
import '../styles.css';
import tshirt from '../classic-tee.jpg'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSize: null
    }
  }

  handleSubmit = () => {
    const { currentSize } = this.state
    if (!currentSize) {
      alert("Please Choose a Size!")
    }
    else {
      this.props.addToSize(currentSize)
      this.setState({ currentSize: null })
    }
  }

  handleSize = (size) => {
    this.setState({ currentSize: size })
  }

  render() {
    const { currentSize } = this.state
    return (
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
    )
  }
}

export default Card
