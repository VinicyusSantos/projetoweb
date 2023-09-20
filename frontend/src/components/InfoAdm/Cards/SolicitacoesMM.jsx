import React from 'react';
import '/src/styles/SolicitacoesAdm.css';

function SolicitacoesMM({ title, imageUrl, body }) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>
            <div className='btn'>
                <button>
                    <a>
                        Funcionário: Miguel
                    </a>
                </button>
            </div>
        </div>
    );
}


export default SolicitacoesMM;