import React, { Component } from 'react';
import './style.css';
import refresh from '../../assets/images/refresh.svg'
import checkmark from '../../assets/images/checkmark.svg';

class NewNav extends Component {

  toggleImg = () => {
    let imgStyle = document.getElementById('checkImg').style.visibility;
    console.log('image toggled');
    console.log(imgStyle);
    if(imgStyle === 'hidden') {
      document.getElementById('checkImg').style.visibility = '';
    } else {
      document.getElementById('checkImg').style.visibility = 'hidden'
    }
  }

 render() {
   return(
      <div className='filter-container'>
        <div>
          <button className='refresh-btn' onClick={this.props.refresh}><img id='refresh-img' src={refresh} alt='refresh symbol' /></button>
        </div>
        <div className='checkbox-container'>
          <div className='filter-select'>
           <input type='checkbox' id='checkbox' /><span onClick={this.props.handleSuccess.bind(this, this.props.rockets.success)} id='success-box' className='checkmark'><img className='check-img' id='checkImgSuccess' src={checkmark} style={{visibility: 'hidden'}} alt='checkmark' /></span><span className='check-text'>LAUNCH SUCCESS</span>
          </div>
          <div className='filter-select'>
           <input type='checkbox' id='checkbox' /><span onClick={this.props.handleReused.bind(this, this.props.rockets.success)} className='checkmark'><img id='checkImgReuse' className='check-img' src={checkmark} style={{visibility: 'hidden'}} alt='checkmark' /></span><span className='check-text'>REUSED</span>
          </div>
          <div className='filter-select'>
           <input type='checkbox' id='checkbox' /><span onClick={this.props.handleReddit.bind(this, this.props.rockets.success)} className='checkmark'><img id='checkImgReddit' className='check-img' src={checkmark} style={{visibility: 'hidden'}} alt='checkmark' /></span><span className='check-text'>WITH REDDIT</span>
          </div>
        </div>
      </div>
  )
 }
}


export default NewNav;