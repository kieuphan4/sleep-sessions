import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sleepsessions">Sleep Sessions</Link></li>
        <li><Link to="/sleepsessions/new">Create New Session</Link></li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar