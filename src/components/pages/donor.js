import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "../../assets/img/avatar.jpg";


export default class Donor extends Component {
  render() {
   return (
     <div class="container mt-5 mb-5 farmer-page">
     <div>
       <h3 className="title"><div class="home-img"><img src="images/donor.jpeg" /></div></h3>
       <h5 className="title">Advanced Computer vision integrated market place for donating perishable foods!</h5>

     </div>
     <div>
       <h4> Today's Donations Listings: </h4>
      </div>
         <div class="d-flex justify-content-center row">

             <div class="col-md-10">

                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={avatar}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Mike Jason</h5>

                         <div class="mt-1 mb-1 spec-1"><span></span><a href="/services"><span>We can have a Chat here :</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">I am Mr. Mike, I had 1 kg of capsicum and one <br/>sandwich which was cooked one hour ago<br/></p>
                         <p class="text-justify text-truncate para mb-0">You can Locate me at: <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>

                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={avatar}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Taylor</h5>


                         <div class="mt-1 mb-1 spec-1"><a href="/services"><span>We can have a Chat here :</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">I am Ms.Taylor I had 1 kg of tomatoes and half <br/>dozen of kiwis, As we are planning to go out <br/>for tour, those need can come and grab .<br/></p>
                         <p class="text-justify text-truncate para mb-0">You can Locate me at : <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>

                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={avatar}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Marry Jones</h5>

                         <div class="mt-1 mb-1 spec-1"><a href="/services"><span>We can have a Chat here: </span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">I am Mary we had 2 plum cakes and cheese <br/>burger, want to donate to kids.<br/></p>
                         <p class="text-justify text-truncate para mb-0">You can Locate me at : <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>

                 </div>
             </div><br/><br/>

          </div>
     </div>
  );
 }
}
