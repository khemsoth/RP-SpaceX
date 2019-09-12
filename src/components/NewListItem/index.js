import React, { Component } from 'react';

class NewListItem extends Component {
 render() {
   return(
      <div>
        <ul>
          <li>{this.props.rockets.rocket.rocket_name}</li>
          <li>{this.props.rockets.rocket.rocket_type}</li>
          <li>{this.props.rockets.launch_date_utc}</li>
          <li>{this.props.rockets.details}</li>
          <li>{this.props.rockets.flight_number}</li>
          <li>{this.props.rockets.links.article_link}</li>
        </ul>
      </div>
  )
 }
}


export default NewListItem;