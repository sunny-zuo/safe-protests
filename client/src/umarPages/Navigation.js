import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">home</NavLink>
          <NavLink to="/aboutSafeProtests">About Safe Protests</NavLink>
          <NavLink to="/yourRights">Your Rights</NavLink>
          <NavLink to="/browseProtests">Browse Protests</NavLink>
          <NavLink to="/termsOfService">Terms of Service</NavLink>
          <NavLink to="/Settings">Settings</NavLink>
       </div>
    );
}
 
export default Navigation;