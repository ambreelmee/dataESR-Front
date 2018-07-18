import React, { Component } from 'react';
import {
  Card, CardBody, Col, Form, FormGroup,
  Input, Label, Modal, ModalBody, ModalHeader, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import AddOrEditModalFooter from '../AddOrEditModalFooter';


class AddressModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address_1: this.props.address_1,
      address_2: this.props.address_2,
      business_name: this.props.business_name,
      city: this.props.city,
      city_code: this.props.city_code,
      country: this.props.country,
      date_start: this.props.date_start,
      date_end: this.props.date_end,
      phone: this.props.phone,
      zip_code: this.props.zip_code,
      status: this.props.status,
    };
    this.triggerAction = this.triggerAction.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(event) {
    this.setState({ status: event.target.id });
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  triggerAction() {
    const jsonBody = JSON.stringify({
      address: {
        address_1: this.state.address_1,
        address_2: this.state.address_2,
        business_name: this.state.business_name,
        city: this.state.city,
        city_code: this.state.city_code,
        country: this.state.country,
        date_start: this.state.date_start,
        date_end: this.state.date_end,
        phone: this.state.phone,
        zip_code: this.state.zip_code,
        status: this.state.status,
      },
    });
    if (this.props.id) {
      const url = `${process.env.API_URL_STAGING}addresses/${this.props.id}`;
      this.props.addContent(url, jsonBody, 'PUT', this.props.institutionId);
    } else {
      const url = `${process.env.API_URL_STAGING}institutions/${this.props.institutionId}/addresses`;
      this.props.addContent(url, jsonBody, 'POST', this.props.institutionId);
    }
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
        <ModalHeader toggle={this.props.toggleModal}>
          {this.props.id ? "Modifier l'adresse actuelle" : 'Ajouter une adresse'}
        </ModalHeader>
        <ModalBody>
          Les champs colorés sont obligatoires
          <Card>
            <CardBody>
              <Form className="form-horizontal">
                <FormGroup>
                  <Label>Nom ou raison sociale</Label>
                  <Input
                    id="business_name"
                    type="text"
                    value={this.state.business_name ? this.state.business_name : ''}
                    placeholder={this.state.business_name ? this.state.business_name : 'Nom ou raison sociale'}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup className="was-validated">
                  <Label>Champ adresse 1</Label>
                  <Input
                    id="address_1"
                    type="text"
                    className="form-control-warning"
                    required
                    value={this.state.address_1 ? this.state.address_1 : ''}
                    placeholder={this.state.address_1 ? this.state.address_1 : 'Numéro et voie postale'}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Champ adresse 2</Label>
                  <Input
                    id="address_2"
                    type="text"
                    value={this.state.address_2 ? this.state.address_2 : ''}
                    placeholder={this.state.address_2 ? this.state.address_2 : 'Batiment, étage, ...'}
                    onChange={this.onChange}
                  />
                </FormGroup>
                <Row md="5">
                  <Col>
                    <FormGroup className="was-validated">
                      <Label>Code Postal</Label>
                      <Input
                        id="zip_code"
                        type="text"
                        className="form-control-warning"
                        required
                        value={this.state.zip_code ? this.state.zip_code : ''}
                        placeholder={this.state.zip_code ? this.state.zip_code : 'Code postal'}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="7">
                    <FormGroup className="was-validated">
                      <Label>Ville</Label>
                      <Input
                        id="city"
                        type="text"
                        className="form-control-warning"
                        required
                        value={this.state.city ? this.state.city : ''}
                        placeholder={this.state.city ? this.state.city : 'Ville'}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="5">
                    <FormGroup>
                      <Label>Code commune</Label>
                      <Input
                        id="city_code"
                        type="text"
                        required
                        value={this.state.city_code ? this.state.city_code : ''}
                        placeholder={this.state.city_code ? this.state.city_code : 'Commune'}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="5">
                    <FormGroup className="was-validated">
                      <Label>Pays</Label>
                      <Input
                        id="country"
                        type="text"
                        className="form-control-warning"
                        required
                        value={this.state.country ? this.state.country : ''}
                        placeholder={this.state.country ? this.state.country : 'France'}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Téléphone</Label>
                      </Col>
                      <Col md="8">
                        <Input
                          id="phone"
                          type="tel"
                          value={this.state.phone ? this.state.phone : ''}
                          placeholder={this.state.phone ? this.state.phone : '06...'}
                          onChange={this.onChange}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Date de début d&#39;activité</Label>
                      <Input
                        type="date"
                        id="date_start"
                        value={this.state.date_start ? this.state.date_start : ''}
                        placeholder={this.state.date_start ? this.state.date_start : ''}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Date de fin d&#39;activité</Label>
                      <Input
                        type="date"
                        id="date_end"
                        value={this.state.date_end ? this.state.date_end : ''}
                        placeholder={this.state.date_end ? this.state.date_end : ''}
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup row>
                  <Col md="3">
                    <Label>Statut</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="active"
                        name="status"
                        value="active"
                        defaultChecked={this.state.status === 'active'}
                        onChange={this.onRadioChange}
                      />
                      <Label className="form-check-label" check htmlFor="active">Actif</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="archived"
                        name="status"
                        value="archived"
                        defaultChecked={this.state.status === 'archived'}
                        onChange={this.onRadioChange}
                      />
                      <Label className="form-check-label" check htmlFor="archived">Archivé</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Form>
              <p>Vous pouvez ajouter ou modifier la géolocalisation directement depuis la carte</p>
            </CardBody>
          </Card>
        </ModalBody>
        <AddOrEditModalFooter
          hasErrored={this.props.hasErrored}
          isLoading={this.props.isLoading}
          message={this.props.id ? "Modifier l'adresse" : 'Ajouter une adresse'}
          toggleModal={this.props.toggleModal}
          triggerAction={this.triggerAction}
        />
      </Modal>

    );
  }
}

AddressModal.propTypes = {
  addContent: PropTypes.func.isRequired,
  address_1: PropTypes.string,
  address_2: PropTypes.string,
  business_name: PropTypes.string,
  id: PropTypes.number,
  city: PropTypes.string,
  city_code: PropTypes.number,
  country: PropTypes.string,
  date_start: PropTypes.string,
  date_end: PropTypes.string,
  institutionId: PropTypes.number.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  modal: PropTypes.bool.isRequired,
  phone: PropTypes.string,
  status: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
  zip_code: PropTypes.string,
};

AddressModal.defaultProps = {
  address_1: null,
  address_2: null,
  business_name: null,
  city: null,
  city_code: null,
  country: null,
  date_start: null,
  date_end: null,
  id: null,
  phone: null,
  status: 'active',
  zip_code: null,
};

export default AddressModal;
