import React from 'react';
import '/src/styles/Card2.css';

function Card2({ title, imageUrl, body }) {
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
        </div>
    );
}

export default Card2;
