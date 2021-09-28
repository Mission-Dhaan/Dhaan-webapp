import React from 'react';
import Iframe from 'react-iframe';

export default function CropDoctor() {
  return (
 
    <div class="container">
    <h3 class ="title">
      <div class="home-img">
        <img src="images/cropdoctor.png" />
        </div>
      </h3>
      <div class="title">
    <p>HELPING OUR FARMERS GROW ORGANICALLY USING TRADITIONAL METHODS</p>
    <p>We here at DHAAN, we help farmers grow crops with primitive methods to see more results organically and to consider people’s health. </p>
    <p>We also see to it that the farmers get the results and profits what they yield and are worth having.</p>
    
      <Iframe url="https://app-c1.a3bnbtend2e.jp-tok.codeengine.appdomain.cloud/"
            width="450px"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            />    
      </div>
    </div>
        
  );
}

//#2d343e