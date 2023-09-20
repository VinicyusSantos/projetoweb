import React from 'react';
import '/src/styles/CardFunc.css';

function CardFunc({ title, imageUrl, body, atributo1, atributo2, atributo3, atributo4, atributo5 }) {
    return (
        <div className='card-containerr'>
            <div className="image-containerr">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-contentr">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-bodyr">
                    <px>{body}</px>
                </div>
                <div className="atributo1">
                    <pz>{atributo1}</pz>
                </div>
                <div className="atributo2">
                    <pz>{atributo2}</pz>
                </div>
                <div className="atributo3">
                    <pz>{atributo3}</pz>
                </div>
                <div className="atributo4">
                    <pz>{atributo4}</pz>
                </div>
                <div className="atributo5">
                    <pz>{atributo5}</pz>
                </div>
            </div>
            
        </div>
    );
}

export default CardFunc;
