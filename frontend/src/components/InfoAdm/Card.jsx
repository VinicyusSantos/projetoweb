import React from 'react';
import '/src/styles/Card.css';

function Card({ title, imageUrl, body }) {
    return (
        <div className='card-containera'>
            <div className="image-containera">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-contenta">
                <div className="card-titlea">
                    <h3>{title}</h3>
                </div>
                <div className="card-bodya">
                    <ppp>{body}</ppp>
                </div>
            </div>
            <div className='btna'>
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
