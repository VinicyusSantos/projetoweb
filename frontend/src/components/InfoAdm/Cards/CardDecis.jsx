import React from 'react';
import '/src/styles/CardDecis.css';

function CardDecis({ title, imageUrl, body}) {
    return (
        <div className='card-containerdec'>
            <div className="image-containerdec">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-contentdec">
                <div className="card-titledec">
                    <h3>{title}</h3>
                </div>
                <div className="card-bodydec">
                    <pl>{body}</pl>
                </div>
            </div>
        </div>
    );
}


export default CardDecis;