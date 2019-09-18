import React, { Component } from 'react';
import './style.css';
import link from '../../assets/images/link.svg';
import rocketImg from '../../assets/images/placeholder.png';

class NewListItem extends Component {
 render() {
   return(
      <div>
        <ul>
          <li className='badge'><img className='badge-img' src={rocketImg} alt='rocket badge' /></li>
          <li className='name'>{this.props.rockets.rocket.rocket_name}</li>
          <li className='type'>{this.props.rockets.rocket.rocket_type}</li>
          <li className='date'>{(new Date(this.props.rockets.launch_date_local)).toLocaleDateString()}</li>
          <li className='details'>{this.props.rockets.details}</li>
          <li className='id'>{this.props.rockets.flight_number}</li>
          <a className='article' href={this.props.rockets.links.article_link} target='_blank'><li className='article'><img src={link} alt='chain-link' /></li></a>
        </ul>
      </div>
  )
 }
}


export default NewListItem;