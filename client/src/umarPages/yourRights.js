import React from 'react';
import home from './home';
 
const yourRights = () => {
    return (
      <div>
      <p><b>Your Rights During a Protest</b></p>
       <p >Knowing your human rights during a protest is crucial part to having a safe and successful protest.</p>
       <p>Please take your time to familiarize yourself with your rights in your country to know how to protect yourself in difficult and unpredictable situations.</p>
       <div class="btn-group">
     <button onclick="location.href='https://www.aclu.org/know-your-rights/protesters-rights/'">United States</button>
       <button onclick="location.href='https://ccla.org/cclanewsite/wp-content/uploads/2017/01/marchrights-1.pdf/'">Canada</button>
       <button onclick="location.href='https://www.daslaw.co.uk/blog/right-to-peaceful-protest'">United Kingdom</button>
       </div>
      </div>
    );
}
   
export default yourRights;