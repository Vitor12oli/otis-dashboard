import React from 'react';
import KPICard from '../components/KPICard';
import StatusCard from '../components/StatusCard';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const kpis = [
    {title:'Prazos', value:'80%'},
    {title:'Custos', value:'R$ 120.000'},
    {title:'Qualidade', value:'95%'}
  ];
  const projectsStatus = {andamento:5, concluidos:3, atrasados:2};

  const chartData = {
    labels:['Prazos','Custos','Qualidade'],
    datasets:[{label:'Indicadores', data:[80,75,95], backgroundColor:['#FF6600','#333','#FF6600'] }]
  };

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>
      <div className="d-flex flex-wrap gap-3 mb-4">
        {kpis.map(k=><KPICard key={k.title} title={k.title} value={k.value}/>)}
      </div>
      <div className="d-flex flex-wrap gap-3 mb-4">
        <StatusCard title="Projetos em Andamento" count={projectsStatus.andamento} color="#FF6600"/>
        <StatusCard title="Projetos Concluídos" count={projectsStatus.concluidos} color="#339966"/>
        <StatusCard title="Projetos Atrasados" count={projectsStatus.atrasados} color="#CC0000"/>
      </div>
      <div className="card p-3">
        <h5>Indicadores</h5>
        <Bar data={chartData}/>
      </div>
    </div>
  );
};

export default Dashboard;
