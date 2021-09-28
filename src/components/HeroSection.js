import React from 'react';
import { Button } from './Button';
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";


function HeroSection() {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const history = useHistory();
  const navigateTo = () => history.push('/recommend');
  const navigateTochatroom = () => history.push('/services');
  const navigateTopredicrop = () => history.push('/recommend');
  const navigateToabout = () => history.push('/about');
  const navigateToCropDoctor  = () => history.push('/cropdoctor');
  const navigateToConsumerConnect  = () => history.push('/consumer-connect');
  const navigateToCoopsConnect  = () => history.push('/coops-connect');
  const navigateToDonor  = () => history.push('/dhaan-bhog');
  const navigateToKissanConnect  = () => history.push('/kissan-connect');
  const navigateToFarmAdapt  = () => history.push('/farm-adapt');

  return (
    <div className='hero-container'>
      <video src='/videos/pepper.mp4' autoPlay loop muted />
      <div class="home-logo"><img src="images/dhaan-icon.jpg"></img></div>
      <h1>GROW WITH DHAAN</h1>
      <h4>Helping farmers grow organically!</h4>

      {isAuthenticated &&(
        <h1>Welcome</h1>
      )}

      <div className='hero-btns'>

      {/* {!isAuthenticated && (
            <Button
            className='btn'
            buttonStyle='btn-primary'
            buttonSize='btn-large'
            onClick={() => loginWithRedirect()}
            >
              JOIN THE CHANGE
            </Button>

        )}

        {!isAuthenticated &&(
            <Button
            className="btn"
            buttonStyle='btn-primary'
            buttonSize='btn-large'
            onClick={() => navigateTo()}
            >
          Predi Crop
          </Button>
        )}

        {!isAuthenticated &&(
            <Button
            className="btn"
            buttonStyle='btn-primary'
            buttonSize='btn-large'
            onClick={() => navigateToCropDoctor()}
            >
          Crop Doctor
          </Button>
        )}

        {!isAuthenticated &&(
              <Button
              className="btn"
              buttonStyle='btn-primary'
              buttonSize='btn-large'
              onClick={() => navigateTopredicrop()}
              >
              Chatroom
            </Button>
          )}

        <Button
          className="btn"
          buttonStyle='btn-primary'
          buttonSize='btn-large'
          onClick={() => navigateToabout()}
          >
        About us
        </Button> */}

        </div>

        {/* <div class="row row-home">
            <img src="images/cropdoctor.png" onClick={() => navigateToCropDoctor()}/>
            <img src="images/predicrop.png" onClick={() => navigateTopredicrop()}/>
            <img src="images/chatroom.png" onClick={() => navigateTochatroom()}/>
            <img src="images/crop-story.png" onClick={() => navigateToConsumerConnect()}/>
            <img src="images/msp.jpeg" onClick={() => navigateToCoopsConnect()}/>
            <img src="images/donor.jpeg" onClick={() => navigateToDonor()}/>
            <img src="images/donor.jpeg" onClick={() => navigateToDonor()}/>
        </div> */}
        <div class="row">
        <div class="about-row">
              <div class="about-column">
                <div class="home-card">
                  <div class="home-img">
                    <img src="images/cropdoctor.png" onClick={() => navigateToCropDoctor()}/>
                  </div>
              </div>
            </div>

            <div class="about-column">
                <div class="home-card">
                  <div class="home-img">
                    <img src="images/predicrop.png" onClick={() => navigateTopredicrop()}/>
                  </div>
              </div>
            </div>

            <div class="about-column">
                <div class="home-card">
                  <div class="home-img">
                    <img src="images/chatroom.png" onClick={() => navigateTochatroom()}/>
                  </div>
              </div>
            </div>


         </div>
         </div>

         <div class="row">
            <div class="about-row">
               <div class="about-column">
                 <div class="home-card">
                   <div class="home-img">
                     <img src="images/crop-story.png" onClick={() => navigateToConsumerConnect()}/>
                   </div>
               </div>
             </div>

             <div class="about-column">
                 <div class="home-card">
                   <div class="home-img">
                     <img src="images/msp.jpeg" onClick={() => navigateToCoopsConnect()}/>
                   </div>
               </div>
             </div>


             <div class="about-column">
                 <div class="home-card">
                   <div class="home-img">
                     <img src="images/donor.jpeg" onClick={() => navigateToDonor()}/>
                   </div>
               </div>
             </div>

           </div>
          </div>

          <div class="row third-row" >
            <div class="about-row">

                <div class="about-column">
                  <div class="home-card">
                    <div class="home-img-1">
                      <img src="images/Kissan.png" onClick={() => navigateToKissanConnect()}/>
                    </div>
                </div>
              </div>

              <div class="about-column">
                <div class="home-card">
                  <div class="home-img-1">
                    <img src="images/adopt.png" onClick={() => navigateToFarmAdapt()}/>
                  </div>
              </div>
            </div>

            </div>
           </div>

        {/* {isAuthenticated &&(
        <div class="main-products">
          <h4>Farmer's FRESH! Today's Listings:</h4>
          <div class="container-products flex">
            <div class="item flex-item"><img src='https://i.ndtvimg.com/i/2018-04/tomato-650_650x400_51523426878.jpg'/><br/> Tomatoes 1KG / $5</div>
            <div class="item flex-item"><img src='https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/07/coloredCarrots-022521-LD-770x533-1-650x428.jpg'/><br/> Carrots 1KG / $5</div>
            <div class="item flex-item"><img src='https://i.ndtvimg.com/i/2018-04/tomato-650_650x400_51523426878.jpg'/><br/> Tomatoes 1KG / $5</div>
            <div class="item flex-item"><img src='https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2017/07/coloredCarrots-022521-LD-770x533-1-650x428.jpg'/><br/> Carrots 1KG / $5</div>
            <div class="item flex-item"><img src='https://i.ndtvimg.com/i/2018-04/tomato-650_650x400_51523426878.jpg'/><br/> Tomatoes 1KG / $5</div>
          </div>
        </div>
         )} */}

    </div>

  );
}

export default HeroSection;
