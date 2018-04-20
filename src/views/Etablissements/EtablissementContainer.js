import React, { Component } from 'react';
import { Button, Col, Row, Card, CardColumns, CardHeader, CardBody } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import AddressContainer from './Address/AddressContainer';
import Evolution from './Evolution';
import NameContainer from './Name/NameContainer';


class EtablissementContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: [],
      isFollowersLoading: false,
      isPredecessorsLoading: false,
      institutionId: null,
      predecessors: [],
      redirectToSearchPage: false,
      redirectToInstitution: false,
    };
    this.goToSearchPage = this.goToSearchPage.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.number) {
      this.props.match.params.number = nextProps.match.params.number;
    }
  }

  goToSearchPage() {
    this.setState({
      redirectToSearchPage: true,
    });
  }

  render() {
    const etablissementId = parseInt(this.props.match.params.number, 10);
    if (this.state.redirectToSearchPage) {
      return <Redirect to="/etablissements" />;
    }
    if (this.state.isFollowersLoading || this.state.isPredecessorsLoading) {
      return <p>loading</p>
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col md="8">
            <Row>
              <Col md="2">
                <Row>
                  <Button
                    color="primary"
                    className="m-3"
                    size="lg"
                    onClick={this.goToSearchPage}
                  >
                  Retour
                  </Button>
                </Row>
              </Col>
              <Col md="10">
                <NameContainer etablissement_id={etablissementId} />
              </Col>
            </Row>
            <AddressContainer etablissement_id={etablissementId} />
          </Col>
          <Col md="4">
            <Row>
              <Evolution etablissement_id={etablissementId} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EtablissementContainer;
