import React, { Component } from 'react';
import NewListItem from '../NewListItem';

class NewList extends Component {
  render() {
    return(
      this.props.rockets.map((rocket) => (
        <NewListItem rockets={rocket} key={this.props.rocket.flight_number}/>
      ))
    )
  }
}


export default NewList;