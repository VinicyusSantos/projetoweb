import React from 'react';
import '/src/styles/CardFunc.css';

function CardFunc({ title, imageUrl, body, atributo1, atributo2, atributo3, atributo4, atributo5 }) {
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
                <div className="atributo1">
                    <p>{atributo1}</p>
                </div>
                <div className="atributo2">
                    <p>{atributo2}</p>
                </div>
                <div className="atributo3">
                    <p>{atributo3}</p>
                </div>
                <div className="atributo4">
                    <p>{atributo4}</p>
                </div>
                <div className="atributo5">
                    <p>{atributo5}</p>
                </div>
            </div>
            
        </div>
    );
}

export default CardFunc;
