import React from 'react';

const ProjectTable = ({projects}) => (
  <table className="table table-striped table-bordered bg-white">
    <thead className="table-dark">
      <tr>
        <th>Cliente</th>
        <th>Status</th>
        <th>Prazo</th>
        <th>Custo</th>
        <th>Área</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((p,i)=>(
        <tr key={i}>
          <td>{p.cliente}</td>
          <td className={`status-${p.status.replace(' ','\\ ')}`}>{p.status}</td>
          <td>{p.prazo}</td>
          <td>R$ {p.custo.toLocaleString()}</td>
          <td>{p.area}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProjectTable;
