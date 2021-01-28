import React, { Component } from 'react'
import { NavbarView } from '../views'

export default class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavbarView isLoggedIn={this.props.isLoggedIn} userId={this.props.userId}/>
        {console.log("________________________________________________",this.props)}
      </div>
    )
  }
}
