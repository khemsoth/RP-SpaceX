import React, { Component } from 'react';
import './style.css';
import link from '../../assets/images/link.svg';

class NewListItem extends Component {
 render() {
  const listContainer = {
    display: 'grid', 
    gridTemplateColumns: '3% 13% 13% 13% 13% 13% 13%',
    girdTemplateRows: 'auto', 
    gridTemplateAreas: 'badge name type date details id article',
  }
  const name = {
    gridArea: 'name'
  }

  const type = {
    gridArea: 'type',
    color: 'red'
  }

  const article = {
    gridArea: 'article',
    color: 'red'
  }
   return(
      <div>
        <ul>
          <li className='name'>{this.props.rockets.rocket.rocket_name}</li>
          <li className='type'>{this.props.rockets.rocket.rocket_type}</li>
          <li className='date'>{(new Date(this.props.rockets.launch_date_local)).toLocaleDateString()}</li>
          <li className='details'>{this.props.rockets.details}</li>
          <li className='id'>{this.props.rockets.flight_number}</li>
          <a className='article' href={this.props.rockets.links.article_link} target='_blank'><li className='article'><img src={link} /></li></a>
        </ul>
      </div>
  )
 }
}


export default NewListItem;