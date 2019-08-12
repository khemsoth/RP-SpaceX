import React, { Component } from 'react';
import {List, ListItem} from '../components/List';
import {Selection, Nav, NavItem} from '../components/Nav'
import link from '../assets/images/link.svg';
import '../scss/styles.css';

class Rockets extends Component {
    state = {
      rockets: []
    };


 async componentDidMount() {
   const res = await fetch('https://api.spacexdata.com/v2/launches');
   const data = await res.json();
   this.setState({rockets: data})
   console.log(data);
  };

  render() {
    return(
      <div>
    <Nav>
      <NavItem>
        <h5 className='nav-badge'>Badge</h5>
        <h5 className='nav-name'>Name</h5>
        <h5 className='nav-type'>Type</h5>
        <h5 className='nav-date'>Date</h5>
        <h5 className='nav-details'>Details</h5>
        <h5 className='nav-id'>ID</h5>
        <h5 className='nav-article'>Article</h5>
      </NavItem>
    </Nav>

    {this.state.rockets.length ? (
      <List>
        {this.state.rockets.map(rockets =>(
       <ListItem>
         <h4 className='name'>{rockets.rocket.rocket_name}</h4>
         <h4 className='type'>{rockets.rocket.rocket_type}</h4>
         <h4 className='date'>{rockets.launch_date_utc}</h4>
         <h4 className='details'>{rockets.details}</h4>
         <h4 className='id'>{rockets.rocket.rocket_id}</h4>
         <h4 className='article'><a href='{rockets.links.article_link}'><img src={link} alt='Deep space'></img></a></h4>
       </ListItem>
     ))}
      </List>
    ) : (
      <h3>Loading rockets...</h3>
    )}
    </div>
    );
  }
}







export default Rockets;