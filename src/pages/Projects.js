import React, { useState } from 'react';
import ProjectTable from '../components/ProjectTable';

const Projects = () => {
  const allProjects = [
    {cliente:'Cliente A',status:'Em andamento',prazo:'30 dias',custo:50000,area:'Vendas'},
    {cliente:'Cliente B',status:'Concluído',prazo:'15 dias',custo:30000,area:'Fábrica'},
    {cliente:'Cliente C',status:'Atrasado',prazo:'45 dias',custo:75000,area:'Campo'},
    {cliente:'Cliente D',status:'Em andamento',prazo:'25 dias',custo:40000,area:'Qualidade'}
  ];
  const [filter,setFilter] = useState('Todos');
  const filteredProjects = filter==='Todos'?allProjects:allProjects.filter(p=>p.status===filter);

  return (
    <div>
      <h1 className="mb-4">Projetos</h1>
      <div className="mb-3 d-flex align-items-center gap-2">
        <label>Filtrar por status:</label>
        <select className="form-select w-auto" onChange={e=>setFilter(e.target.value)}>
          <option>Todos</option>
          <option>Em andamento</option>
          <option>Concluído</option>
          <option>Atrasado</option>
        </select>
      </div>
      <ProjectTable projects={filteredProjects}/>
    </div>
  );
};

export default Projects;
