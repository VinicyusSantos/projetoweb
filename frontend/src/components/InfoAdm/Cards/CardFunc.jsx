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
                    <pzz>{atributo1}</pzz>
                </div>
                <div className="atributo2">
                    <pzz>{atributo2}</pzz>
                </div>
                <div className="atributo3">
                    <pzz>{atributo3}</pzz>
                </div>
                <div className="atributo4">
                    <pzz>{atributo4}</pzz>
                </div>
                <div className="atributo5">
                    <pzz>{atributo5}</pzz>
                </div>
            </div>

        </div>
    );
}

export default CardFunc;