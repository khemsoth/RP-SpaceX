import React, { Component } from 'react';
import './style.css';
import refresh from '../../assets/images/refresh.svg'

class NewNav extends Component {
 render() {
   return(
      <div className='filter-container'>
        <div>
          <button className='refresh-btn' onClick={this.props.refresh}><img src={refresh} /></button>
        </div>
        <div className='checkbox-container'>
          <input type='checkbox' id='checkbox' onChange={this.props.handleSuccess.bind(this, this.props.rockets.success)}/>Launch Success
          <input type='checkbox' id='checkbox' onChange={this.props.handleReused.bind(this, this.props.rockets.reused)} />Reused
          <input type='checkbox' id='checkbox' onChange={this.props.handleReddit.bind(this.props.rockets.reddit)}/>Reddit
        </div>
      </div>
  )
 }
}


export default NewNav;