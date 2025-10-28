import React from 'react';

const KPICard = ({title, value, color='#FF6600'}) => (
  <div className="card kpi-card flex-fill p-3 mb-3" style={{backgroundColor:color}}>
    <h6>{title}</h6>
    <h3>{value}</h3>
  </div>
);

export default KPICard;
