import React, { Component } from 'react';
import NewListItem from '../NewListItem';

class NewList extends Component {
  render() {
    return(
      this.props.rockets.map((rocket) => (
        <NewListItem rockets={rocket} key={rocket.rocket.flight_number}/>
      ))
    )
  }
}


export default NewList;