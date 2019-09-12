import React, { Component } from 'react';

class NewNav extends Component {
 render() {
   return(
      <div>
        <input type='checkbox' onChange={this.props.handleSuccess.bind(this, this.props.rockets.success)}/>Launch Success
        <input type='checkbox' onChange={this.props.handleReused.bind(this, this.props.rockets.reused)} />Reused
        <input type='checkbox' onChange={this.props.handleReddit.bind(this.props.rockets.reddit)}/>Reddit
      </div>
  )
 }
}


export default NewNav;