import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from "../../assets/img/tomato.jpg";
import cabbage from "../../assets/img/cabbage.jpg";
import carrot from "../../assets/img/carrot.jpg";
import brinjal from "../../assets/img/brinjal.jpg";
import ridge from "../../assets/img/ridge.jpg";
import capsicum from "../../assets/img/capsicum.jpg";

export default class Consumer extends Component {
  render() {
   return (
     <div class="container mt-5 mb-5 farmer-page">
     <div>
       <h3 className="title"><div class="home-img"><img src="images/crop-story.png" /></div></h3>
       <h5 className="title"> Crop Story...... Track the Crop's journey!</h5>

     </div>

         <div class="d-flex justify-content-center row">

         <iframe src="https://www.google.com/maps/d/embed?mid=1lXV5BxvhbrhKwOOmxG2flE8dlZ8&hl=en" width="640" height="480"></iframe>
         <div>
           <h4>Farmer's FRESH! Today's Listings: </h4>
          </div>
             <div class="col-md-10">
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={tomato}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Hybrid Tomatoes</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>95% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><span></span><a href="/services"><span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Marry Jones, one acre of organic farming <br/>land with fresh and perishable goods.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $10</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy Online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={cabbage}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Cabbage</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>90% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><a href="/services"> <span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Johny Daniel organic farming land.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $7</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={carrot}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Carrot</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>90% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><a href="/services"><span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Joseph Agro organic farming land.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $5</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy Online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
             </div><br/><br/>
             <div>
               <h4>Half Ripened! Today's Listings:</h4>
              </div>
             <div class="col-md-10">


                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={brinjal}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Brinjal</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>90% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><a href="/services"><span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Agro organic farming land.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $2</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy Online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={ridge}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Ridge Gourd</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>93% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><a href="/services"> <span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Kate Jones, one acre of organic <br/>farming land.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/><br/></p>
                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $2</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
                 <div class="row p-2 bg-white border rounded mt-2">
                     <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src={capsicum}/></div>
                     <div class="col-md-6 mt-1">
                         <h5>Capsicum</h5>
                         <div class="d-flex flex-row">
                             <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                         </div>
                         <div class="mt-1 mb-1 spec-1"><span>92% organic</span></div>
                         <div class="mt-1 mb-1 spec-1"><a href="/services"><span>Chat</span>&emsp;<i class="fas fa-comments"></i></a></div>
                         <p class="text-justify text-truncate para mb-0">From Johny, one acre of organic farming land.<br/></p>
                         <p class="text-justify text-truncate para mb-0">Location <i class="fas fa-map-marker-alt">&emsp;</i>.<br/></p>

                     </div>
                     <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                         <div class="d-flex flex-row align-items-center">
                             <h5 class="mr-1">1KG / $1</h5>
                         </div>

                         <div class="d-flex flex-column mt-4"><button class="btn helper-btn btn-sm" type="button"><i class="fas fa-shopping-basket">&emsp;</i>Buy Online</button><button class="btn btn-outline-success btn-sm mt-2" type="button"><i class="fas fa-map-marker-alt">&emsp;</i>Store Finder</button></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  );
 }
}
