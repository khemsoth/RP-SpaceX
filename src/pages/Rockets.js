/*

import React, { Component } from 'react';
import {List, ListItem} from '../components/List';
import {Selection, Nav, NavItem} from '../components/Nav'
import link from '../assets/images/link.svg';
import '../scss/styles.css';
import refresh from '../assets/images/refresh.svg';



class Rockets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: [],
      launch_success: false,
      success: false,
      reuse: false,
      reddit: false
    };
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleReuse = this.handleReuse.bind(this);
    this.handleReddit = this.handleReddit.bind(this);
  };
  
  handleSuccess() {
    console.log('Clicked Success');
    this.setState(state => ({
      success: !state.success
   }));
    console.log('success: ' + !this.state.success);
  }

  handleReuse() {
    console.log('Clicked Reuse');
    this.setState(state => ({
      reuse: !state.reuse
   }));
    console.log('reuse: ' + !this.state.reuse);
  }

  handleReddit() {
    console.log('Clicked Reddit');
    this.setState(state => ({
      reddit: !state.reddit
   }));
    console.log('reddit: ' + !this.state.reddit);
  }

 async componentDidMount() {
   const res = await fetch('https://api.spacexdata.com/v2/launches');
   const data = await res.json();
   this.setState({
     rockets: data,
    });
   console.log(data);
  };

  render() {
    const launchSuccess = this.state.rockets.filter(rockets => rockets.launch_success);
    const renderSuccess = launchSuccess.map((rockets) => {<li>{rockets}</li>})
    const successStatus = this.state.success;
    const reuseStatus = this.state.reuse;
    let success;
    let reuse;

    if (successStatus === false) {
      success = 
        <div>
          {this.state.rockets.length ? (
       <List>
          {launchSuccess.map(rockets =>(
         <ListItem>
          <h4 className='name'>{rockets.rocket.rocket_name}</h4>
          <h4 className='type'>{rockets.rocket.rocket_type}</h4>
          <h4 className='date'>{rockets.launch_date_utc}</h4>
          <h4 className='details'>{rockets.details}</h4>
          <h4 className='id'>{rockets.rocket.rocket_id}</h4>
          <h4 className='article'><a href={rockets.links.article_link}><img className='article-img' src={link} alt='Deep space'></img></a></h4>
         </ListItem>
           ))}
        </List>
    ) : (
      <h3>Loading rockets...</h3>
    )}
      </div>} else if(reuseStatus === false) {
        reuse =
        <div>
      <h2>Oops</h2>
      </div>
    }
    return(
      <div>
    <Nav>
      <img className='refresh-btn' onClick={this.componentDidMount} src={refresh}></img>
      <form>
        <label>
          <input type='checkbox' onClick={this.handleSuccess} />
          Land Success
        </label>
        <label>
          <input type='checkbox' onClick={this.handleReuse}/>
          Reused
        </label>
        <label>
          <input type='checkbox' onClick={this.handleReddit}/>
          With Reddit          
        </label>
      </form>
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
      {success}
    </div>
    );
  }
}







export default Rockets;