import React from 'react';
import '/src/styles/SolicitacoesAdm.css';

function SolicitacoesJJ({ title, imageUrl, body, funcionario }) {
    return (
        <div className='card-containert'>
            <div className="image-containert">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-contentt">
                <div className="card-titlet">
                    <h3>{title}</h3>
                </div>
                <div className="card-bodyt">
                    <p>{body}</p>
                </div>
            </div>
            <div className='nomere'>
                    <pp>{funcionario}</pp>
            </div>
        </div>
    );
}


export default SolicitacoesJJ;