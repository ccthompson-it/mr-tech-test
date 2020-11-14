import React, { Component, Fragment } from 'react'
import '../styles.css';

import Nav from './Nav'
import Card from './Card'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      small: 0,
      med: 0,
      large: 0
    }
  }

  addToSize = (currentSize) => {
    this.setState({ [currentSize]: this.state[currentSize] += 1 })
  }

  render() {
    const { small, med, large } = this.state
    return (
      <Fragment>

        <Nav small={small} med={med} large={large} />

        <Card addToSize={this.addToSize} />

      </Fragment>
    )
  }
}

export default App
