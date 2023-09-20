import React from 'react';
import '/src/styles/Card.css';

function Card({ title, imageUrl, body }) {
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
                        VEJA MAIS
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Card;
