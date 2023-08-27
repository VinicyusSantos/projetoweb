import express from 'express';

export const routes = express.Router()

routes.post('/login', (req, res) =>{
    res.send('Login endpoint')
})
