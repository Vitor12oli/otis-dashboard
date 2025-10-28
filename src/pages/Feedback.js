import React, { useState } from 'react';

const Feedback = () => {
  const [feedbacks,setFeedbacks] = useState([]);
  const [cliente,setCliente] = useState('');
  const [comentario,setComentario] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setFeedbacks([...feedbacks,{cliente,comentario}]);
    setCliente(''); setComentario('');
  };

  return (
    <div>
      <h1 className="mb-4">Feedback</h1>
      <form className="mb-3" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Nome do Cliente" value={cliente} onChange={e=>setCliente(e.target.value)} required/>
        <textarea className="form-control mb-2" placeholder="Comentário" value={comentario} onChange={e=>setComentario(e.target.value)} required/>
        <button className="btn btn-warning" type="submit">Enviar</button>
      </form>
      <ul className="list-group">
        {feedbacks.map((f,i)=><li key={i} className="list-group-item">{f.cliente}: {f.comentario}</li>)}
      </ul>
    </div>
  );
};

export default Feedback;
