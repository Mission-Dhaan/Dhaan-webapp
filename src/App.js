import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ConsumerConnect from './components/pages/consumer';
import DhaanBhog from './components/pages/donor';
import CoopsConnect from './components/pages/coops';
import Kissan from './components/pages/kissan';
import FarmAdopt from './components/pages/adopt';

import Services from "./components/Services";
import CropDoctor from "./components/CropDoctor";

import CropRecommender from './components/pages/farmer/cropRecommender';

import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-2">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path='/recommend' component={CropRecommender} />
            <Route path='/consumer-connect' component={ConsumerConnect} />
            <Route path='/dhaan-bhog' component={DhaanBhog} />
            <Route path='/coops-connect' component={CoopsConnect} />
            <Route path='/kissan-connect' component={Kissan} />
            <Route path='/farm-adapt' component={FarmAdopt} />
            <Route path='/cropdoctor' component={CropDoctor} />

          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
