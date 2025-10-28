import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const data = {
    labels:['Vendas','Fábrica','Campo','Qualidade'],
    datasets:[{
      label:'Projetos por Área',
      data:[5,3,2,4],
      backgroundColor:['#FF6600','#333','#FF6600','#339966']
    }]
  };

  return (
    <div>
      <h1 className="mb-4">Relatórios</h1>
      <div className="card p-3">
        <h5>Projetos por Área</h5>
        <Pie data={data}/>
      </div>
    </div>
  );
};

export default Reports;
