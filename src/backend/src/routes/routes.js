import express from 'express';

export const routes = express.Router()

const obras = [{
    id: 1,
    local: 'Parque Recife',
    custo: '50.000',
},
{
    id: 2,
    local: 'Escola',
    custo: '150.000'
}]

routes.get('/obras', (req, res) =>{
    res.send(obras)
})

