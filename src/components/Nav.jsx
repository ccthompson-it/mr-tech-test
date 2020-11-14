import React, { Component, Fragment } from 'react'
import '../styles.css';
import DropdownCard from './DropdownCard'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false
    }
  }

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown })
  }

  render() {
    const { small, med, large } = this.props
    const { dropdown } = this.state
    return (
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
            {small > 0 && DropdownCard('small', small)}
            {med > 0 && DropdownCard('med', med)}
            {large > 0 && DropdownCard('large', large)}
          </div>}
        </div>
      </div>
    )
  }
}

export default Nav
