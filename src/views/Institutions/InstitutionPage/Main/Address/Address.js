import React from 'react';
import PropTypes from 'prop-types';

const Address = props => (
  <div>
    <span className="text-primary"><strong>{props.business_name}</strong></span>
    {props.business_name ? <br /> : <span />}
    <i className="fa fa-map-marker fa-lg mr-1" />
    <strong>{props.address_1}</strong>{props.address_2 ? ` (${props.address_2})` : ''}
    <strong>{`, ${props.zip_code} ${props.city}`}</strong>
    {props.city_code ? <span><br />Code commune: </span> : <span />}{props.city_code}
    {props.phone ? <span><br /><i className="fa fa-phone pr-1" /></span> : <span />}{props.phone}
  </div>);

Address.propTypes = {
  address_1: PropTypes.string,
  address_2: PropTypes.string,
  business_name: PropTypes.string,
  city: PropTypes.string,
  city_code: PropTypes.number,
  phone: PropTypes.string,
  zip_code: PropTypes.string,
};

Address.defaultProps = {
  address_1: null,
  address_2: null,
  business_name: null,
  city: null,
  city_code: null,
  phone: null,
  zip_code: null,
};

export default Address;
