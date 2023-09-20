import express from 'express'

export const solicitacoescontroller = express.Router()

const solicitacoes = [
]

solicitacoescontroller.post = (req, res) => {
    const {texto} = req.body;
    solicitacoes.push(texto);
    res.status(201).json({ message: 'Texto enviado' });
};

solicitacoescontroller.get = (req, res) => {
    res.json({ solicitacoes });
  };