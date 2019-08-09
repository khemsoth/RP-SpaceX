import React, { Component } from 'react';
import {List, ListItem} from '../components/List';
import link from '../assets/images/link.svg';

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
         <h4>Rocket Name: {rockets.rocket.rocket_name}</h4>
         <h4>Rocket Type: {rockets.rocket.rocket_type}</h4>
         <h4>Launch Date: {rockets.launch_date_utc}</h4>
         <h4>Details: {rockets.details}</h4>
         <h4>ID: {rockets.rocket.rocket_id}</h4>
         <h4>Article: <a href='{rockets.links.article_link}'><img src={link}></img></a></h4>
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