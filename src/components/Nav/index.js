import React from 'react';
import './style.css';
import refresh from '../../assets/images/refresh.svg'



export function Nav({ children }) {
  return(
    <div>
      <img className='refresh-btn' src={refresh}></img>
      <form>
        <label>
          <input type='checkbox' />
          Land Success
        </label>
        <label>
          <input type='checkbox' />
          Reused
        </label>
        <label>
          <input type='checkbox' />
          With Reddit          
        </label>
      </form>
      <ul>{ children }</ul>
    </div>
  )
}

export function NavItem({ children }) {
  return <li>{ children }</li>;
}

export default Nav;