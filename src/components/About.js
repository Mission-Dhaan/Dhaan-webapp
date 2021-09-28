import React from 'react';

export default function About() {
  return (
    <div className="container">
      {/* <div className="about">
        <h1>About us</h1>    
        <h5>Mission Organic</h5>    
        <p>We believe farmers wordwide are disconnected and underespesented.</p>
        <p>By just answering few  questions our Artificial Inteligence engine can recommend you with fast and personalised advice on how to grow and maintain a healthy crops organically.</p>
        <h5>How does it work?</h5>
        <div class="crop-img">
          <img src="images/crop1.jpg"/>
          </div>
        <p>Simple. We use the information you provide us such as your location, the soil type of your field and the current season to provide you with the most tailored farming advice. </p>
        <p>We will provide you with insigtful tips  inspired by how our ancestors used to farm.
        This will not only create a movement to grow organically but can reverse the Climate Change. 
        Dhaan will also c
        onnect you with farmers in similar locations or with similar crops, so you can benefit from each other. </p>
      </div> */}
      <div className="about">
        <h1>About us</h1> 
        <h3>We believe farmers wordwide are disconnected and underespesented.</h3> 
      </div>

      <div class="about-row">
        <div class="about-column">
          <div class="about-card">                              
          <div class="crop-img">
          <img src="images/crop1.jpg"/>
          </div>
                  <h3>Mission Organic</h3>                  
                 
                  <p>By just answering few  questions our Artificial Inteligence engine can recommend you with fast and personalised advice on how to grow and maintain a healthy crops organically.</p>
              </div>
          </div>
              <div class="about-column">
                <div class="about-card">                      
                <div class="crop-img">
          <img src="images/crop1.jpg"/>
          </div>
                    <h3>How does it work?</h3>                      
                    <p>Simple. We use the information you provide us such as your location, the soil type of your field and the current season to provide you with the most tailored farming advice. </p>
        
                </div>
              </div>
              <div class="about-column">
                  <div class="about-card">                      
                  <div class="crop-img">
          <img src="images/crop1.jpg"/>
          </div>
                <h3>Process</h3>                      
                <p>We will provide you with insigtful tips  inspired by how our ancestors used to farm. This will not only create a movement to grow organically but can reverse the Climate Change. Dhaan will also connect you with farmers in similar locations or with similar crops, so you can benefit from each other. </p>
              </div>
              </div>
        </div>
       <br></br><hr></hr>
      </div>
  )
}

//#2d343e