import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './telainicio.jsx'

function testando() {
    return(
        ReactDOM.render(document.getElementById('root')).render(
            <React.StrictMode>
                <App2 />
            </React.StrictMode>,
        )
    );
}

export default testando;