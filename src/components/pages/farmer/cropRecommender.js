import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import logo from './speech.gif'
import { Redirect } from 'react-router';

import { useHistory } from "react-router-dom";


class cropRecommender extends Component {

   constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        Sowing_time: '',
        Region: '',
        Soil_Type: '',
      },
      result: "",
      translator: "",
      lang: "",
      audio: "",
      Redirect: false
    };


  }


  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }


  handleChangetranslator = (event) => {
    const lan =  event.target.value;
    const val = this.state.result;

    this.setState({
      lang : lan
    });
  }


  decode_utf8(s) {
    return decodeURIComponent(escape(s));
  }

  handlePredictClick = (event) => {

   this.setState({ isLoading: true });

   const formData = this.state.formData;


    if(formData.Sowing_time == '' || formData.Region == '' ){
        alert("Please fill the values");
        return false;
    }


    var predictValue = ''

    // this.setState({ isLoading: true });
    // console.log(formData);
    // fetch('https://dhaanapi.herokuapp.com/autoai?Sowing_time='+formData.Sowing_time+'&Region='+formData.Region+'&Soil_Type='+formData.Soil_Type,
    //   {
    //     method: 'GET'
    //   })
    //   .then(response => response.json())
    //   .then(response => {

    //     console.log(response.predictions[0].values[0][0])
    //     predictValue = response.predictions[0].values[0][0]

        predictValue = "Coriander";
        this.setState({
          result: predictValue,
          isLoading: true
        });


        //console.log("Predicted Crop to Grow is "+predictValue) ://dhaanapi.herokuapp.com
        fetch('https://dhaanapi.herokuapp.com/translate?text=Predicted Crop to Grow is '+predictValue+'&lang=en-hi',
        {
          method: 'GET'
        })
        .then(response => {
          this.readTranslator();
        });



      // });

  }

  readTranslator(){

    fetch('https://dhaanapi.herokuapp.com/readtranslate',
        {
          method: 'GET'
        })
        .then(myRead => {

          myRead = {'audio': 'recommendationa1dda21d-43de-41f4-82ba-b0a20144b98c.mp3', 'output': 'Forudsagt Crop til Grow er Coriander'}

      
          this.setState({
            translator: myRead.output,
            //audio: "https://dhaanlangtranslator.eu-gb.mybluemix.net/"+myRead.audio,
            audio: "https://dhaanui.herokuapp.com/recommendation54212ee6-0f73-4f78-a2a6-6d1c98d3658c.mp3",
            isLoading: true
          });

          
        });
  }

  handleTranslatorClick = (event) => {


    const predictVal = this.state.result;
    const language = this.state.lang;

    this.setState({ isLoading: true });


    fetch('https://dhaanapi.herokuapp.com/translate?text=Predicted Crop to Grow is  '+predictVal+'&lang='+language,
    {
      method: 'GET'
    })
    .then(response => {
      this.readTranslator();
    });

    this.readTranslator();

   }
  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }


  navigateToOrganic = () => {
    // this.setState({Redirect: true});
  }

  render() {

    if (this.state.Redirect) {
      return <Redirect push to="/organic" />;
    }

    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const translator = this.state.translator;
    return (
      <div className="container farmer-page">
        <div>
          <h3 className="title"><div class="home-img"><img src="images/predicrop.png" /></div></h3>

          <h5 className="title">Just fill in the details below and we'll PREDICT the right Crop for you!</h5>
        </div>

               <div className="content">
            <form className="user-form">
            <div className="form-group">
                <label className="user-form-label">Please Select the Values</label>
                <select name="Region" id="Region" class="form-control"  onChange={this.handleChange}>
                    <option value="">Select Region</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>

            <div className="form-group">
                <label className="user-form-label"></label>
                <select id="Sowing_time" name="Sowing_time" class="form-control" onChange={this.handleChange}>
                    <option>Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

                <div className="form-group">
                    <label className="user-form-label"></label>
                    <select id="Soil_Type" name="Soil_Type" class="form-control" onChange={this.handleChange}>
                        <option>Select Soil Type (Optional)</option>
                        <option value="black cotton">Black Cotton soil</option>
                        <option value="Red">Red Soil</option>
                        <option value="loamy">Loamy Soil</option>
                        <option value="laterite">Laterite Soil</option>
                        <option value="sandy">Sandy Soil</option>
                        <option value="clay">Clay Soil</option>
                        <option value="alluvial">Alluvial Soil</option>
                        <option value="well-drained deep">Well-drained deep soil</option>
                        <option value="deltaic">Deltaic Soil</option>
                        <option value="slightly acidic">Slightly Acidic Soil</option>

                    </select>
                </div>

                <button type="button" className="btn btn-success submit-btn" onClick={this.handlePredictClick}>Submit</button>
                {isLoading === true &&
                    <div class="loading"><img src="images/speech.gif"/></div>
                  }
            </form>
            {isLoading === true &&
             <Row>
                <div class="resultTab">
                    <span class="cropTxt">{result}</span> is the best crop. <br/>AI Engine powered by IBM AUTO AI
                    <br/><img src="images/watson.png"/>
                    <br/>Want to know how you can grow {result} ORGANICALLY, <button type="button" className="btn btn-success submit-btn" onClick={() => this.navigateToOrganic()}>Click Here</button>
                </div>

                <div class="resultTab">
                <form className="user-form">
                  <div className="form-group">
                      <label className="user-form-label">Want to see it in your language?</label>
                        <select id="lang" name="lang" class="form-control" onChange={this.handleChangetranslator}>
                              <option>Select Language </option>
                              <option value="en-ar">Arabic</option>
                              <option value="en-zh">Chinese</option>
                              <option value="en-hr">Croatian</option>
                              <option value="en-cs">Czech</option>
                              <option value="en-da">Danish</option>
                              <option value="en-fr">French</option>
                              <option value="en-hi">Hindi</option>
                              <option value="en-ta">Tamil</option>
                          </select>
                          <button type="button" className="btn btn-success submit-btn" onClick={this.handleTranslatorClick}>Submit</button>
                          Translation from the following Language : {this.state.lang}):  {this.state.translator}
                      </div>
                      </form>
                    </div>
                <div class="resultTab">
                <audio
                    controls
                    src={this.state.audio}>
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
                </div>
            </Row>
             }
        </div>

      </div>
    );
  }
}

export default cropRecommender;
