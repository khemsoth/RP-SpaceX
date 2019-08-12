import React, { Component } from 'react';
import {List, ListItem} from '../components/List';
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
    {this.state.rockets.length ? (
      <List>
        {this.state.rockets.map(rockets =>(
       <ListItem>
         <h4 className='name'>Rocket Name: {rockets.rocket.rocket_name}</h4>
         <h4 className='type'>Rocket Type: {rockets.rocket.rocket_type}</h4>
         <h4 className='date'>Launch Date: {rockets.launch_date_utc}</h4>
         <h4 className='details'>Details: {rockets.details}</h4>
         <h4 className='id'>ID: {rockets.rocket.rocket_id}</h4>
         <h4 className='article'>Article: <a href='{rockets.links.article_link}'><img src={link} alt='Deep space'></img></a></h4>
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