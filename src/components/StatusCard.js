import React from 'react';

const StatusCard = ({title, count, color='#FFFFFF'}) => (
  <div className="card p-3 text-center mb-3" style={{backgroundColor:color}}>
    <h6>{title}</h6>
    <h3>{count}</h3>
  </div>
);

export default StatusCard;
