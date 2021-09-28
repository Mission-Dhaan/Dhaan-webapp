import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import adapt from "../../assets/img/farmingadapt.jpg";


export default class FarmAdopt extends Component {
  render() {
   return (
     <div class="container mt-5 mb-5 farmer-page">
        <div><h3 className="title"><div class="home-img"><img src="images/adopt.png" /></div></h3>
          <h5 className="title"> Adopt a farm and grow it organically!</h5>

          <div class="d-flex justify-content-center row">
          <div class="col-md-10 mt-1"><img src={adapt} alt="kissan connect"/></div>
              <h5 className="title">An individual can adopt a farm and do farming along with the farmer!</h5>
          </div>
          </div>
     </div>
  );
 }
}
