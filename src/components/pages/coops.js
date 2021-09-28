import React, { Component } from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import tomato from "../../assets/img/tomato.jpg";
import cabbage from "../../assets/img/cabbage.jpg";
import carrot from "../../assets/img/carrot.jpg";

export default class CoopsConnect extends Component {
  render() {
   return (
     <div><h3 className="title"><div class="home-img"><img src="images/msp.jpeg" /></div></h3>
     <div class="container mt-5 mb-5 farmer-page">
     <h5 className="title"> Brings transparency by listing live MSP, Slot booking for farmer to sell produce at the Coops !</h5>
     <hr/>
        <div class="d-flex justify-content-center row">
          <div class="col-md-10 mt-1">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Commodity</th>
                <th scope="col">Variety</th>
                <th scope="col">2015-16</th>
                <th scope="col">2016-17</th>
                <th scope="col">2017-18	</th>
                <th scope="col">2018-19</th>
                <th scope="col">2019-20</th>
                <th scope="col">2020-21	</th>
                <th scope="col">2021-22</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>BAJRA</td>
                <td>-</td>
                <td>1275</td>
                <td>1330</td>
                <td>1425</td>
                <td>1950</td>
                <td>2000</td>
                <td>2150</td>
                <td>2250</td>
              </tr>
              <tr>

                <td>SOYABEAN</td>
                <td>Black</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
              <td>SOYABEAN</td>
              <td>Yellow</td>
              <td>2600</td>
              <td>2775</td>
              <td>3050</td>
              <td>3399</td>
              <td>3710</td>
              <td>3880</td>
              <td>3950</td>
              </tr>
              <tr>
              <td>Groundnut</td>
              <td>-</td>
              <td>2300</td>
              <td>2700</td>
              <td>4450</td>
              <td>4890</td>
              <td>5090</td>
              <td>5275</td>
              <td>5550</td>
              </tr>
            </tbody>
          </table>
          </div>

          </div>
          </div>
     </div>
  );
 }
}
