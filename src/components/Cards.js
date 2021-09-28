import React from 'react';
import CardItems from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1> Helping farmers Across Globe!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='images/doctor.jpg'
              text='Upload an image of your crop for an instant diagnosis of what might be wrong with your crops.'
              label='CROP DOCTOR'
              path='/services'
            />
            { <CardItems
              src='images/crops.jpg'
              text='Just fill in the details and we will PREDICT the right Crop with organic practices to cultivate for you!'
              label='PREDI CROP'
              path='/services'
            /> }
          </ul>
          { <ul className='cards__items'>
            <CardItems
              src='images/coperative.jpg'
              text='Connecting Farmers and Co-Operatives for smoother interaction'
              label='CO-OPS-CONNECT'
              path='/services'
            />
            <CardItems
              src='images/consumer.jpg'
              text='Speak to the Farmers directly and buy their produce instantly'
              label='CONSUMER-CONNECT'
              path='/services'
            />
            <CardItems
              src='images/hungry.jpg'
              text='A community market place to feeding the needy by sharing the excess food. Reward: Earn Dhaan coins.'
              label='DHAAN BHOG'
              path='/services'
            />
          </ul> }
        </div>
      </div>
    </div>
  );
}

export default Cards;
