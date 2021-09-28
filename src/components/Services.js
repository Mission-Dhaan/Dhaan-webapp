import React from 'react';
import Iframe from 'react-iframe';

export default function Services() {
  return (
    <div class="title">
      <h3 class ="title">
      <div class="home-img">
        <img src="images/chatroom.png" />
        </div>
      </h3>
      <Iframe url="https://dhaanchatui.herokuapp.com/"
        width="450px"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        />
    </div>
        
  );
}

//#2d343e