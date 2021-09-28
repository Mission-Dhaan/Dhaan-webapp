import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import kissan from "../../assets/img/mspconnect.jpg";

export default class Kissan extends Component {
  render() {
   return (
     <div class="container mt-5 mb-5 farmer-page">
        <div><h3 className="title"><div class="home-img"><img src="images/Kissan.png" /></div></h3>
          <h5 className="title"> Social network for the farmers!</h5>

          <div class="d-flex justify-content-center row">
          <div class="col-md-10 mt-1"><img src={kissan} alt="kissan connect"/></div>
              <h5 className="title"> Be a friend to the farmer!</h5>
              <h5 className="title"> Exchange best practices information about organic farming!</h5>

          </div>
          </div>
     </div>
  );
 }
}
