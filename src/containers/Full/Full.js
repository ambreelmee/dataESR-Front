import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Footer from '../../components/Footer/';
import PrivateRoute from '../../PrivateRoute';
import Update from '../../views/Update/Update';
import SearchPage from '../../views/Etablissements/SearchPage';
import EtablissementContainer from '../../views/Etablissements/EtablissementContainer';
import Dashboard from '../../views/Dashboard/Dashboard';

const Full = props => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar {...props} />
      <main className="main">
        <Container fluid>
          <Switch>
            <PrivateRoute exact path="/etablissements"component={SearchPage} />
            <PrivateRoute path="/etablissements/:number" component={EtablissementContainer} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/referentiel" component={Update} />
            <Redirect from="/" to="/etablissements" />
          </Switch>
        </Container>
      </main>
    </div>
    <Footer />
  </div>
);

export default Full;
