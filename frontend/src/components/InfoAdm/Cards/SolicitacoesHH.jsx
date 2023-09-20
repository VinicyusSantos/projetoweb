import React from 'react';
import '/src/styles/SolicitacoesAdm.css';

function SolicitacoesJJ({ title, imageUrl, body, funcionario }) {
    return (
        <div className='card-containertx'>
            <div className="image-containertx">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-contenttx">
                <div className="card-titletx">
                    <h3>{title}</h3>
                </div>
                <div className="card-bodytx">
                    <pl>{body}</pl>
                </div>
            </div>
            <div className='nomerex'>
                    <ppq>{funcionario}</ppq>
            </div>
        </div>
    );
}


export default SolicitacoesJJ;