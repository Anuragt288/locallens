// src/components/TopCards.js
import React from 'react';
import { Card, CardBody } from "reactstrap";

import '../../index.css'

const TopCards = (props) => {
  return (
    <Card>
      <CardBody style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <div className="d-flex align-items-center">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={`bi ${props.icon}`}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TopCards;
