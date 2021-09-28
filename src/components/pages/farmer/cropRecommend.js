import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class cropRecommender extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        Sowing_time: '',
        Region: '',
        Soil_Type: 1,
      },
      result: ""
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

  handlePredictClick = (event) => {
/*    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('https://eu-de.ml.cloud.ibm.com/ml/v4/deployments/200b83ff-46d7-436b-94db-d45d667c0e1b/predictions?version=2021-07-09',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });*/
      this.setState({
        result: "Bajra",
        isLoading: false
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    return (
      <div className="container">
        <div>
          <h3 className="title">Crop Recommender</h3>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Sowing Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Sowing Time"
                  name="Sowing_time"
                  value={formData.Sowing_time}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Region</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Region"
                  name="Region"
                  value={formData.Region}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Soil Type</Form.Label>
                <Form.Control
                  as="select"
                  value={formData.Soil_type}
                  name="Soil_type"
                  onChange={this.handleChange}>
                  <option>Black cotton</option>
                  <option>Alluvial</option>
                  <option>Red Soil</option>
                  <option>Sandy Soil</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </div>
    );
  }
}

export default cropRecommender;
