import express from 'express'

export const routercontroller = express.Router()

routercontroller.get = (req, res) => {
    res.send('running')
} 
