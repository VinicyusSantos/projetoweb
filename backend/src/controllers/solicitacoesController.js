import express from 'express';

export const solicitacoescontroller = express.Router();

const solicitacoes = [];

solicitacoescontroller.get=(req, res) => {
  res.json({ solicitacoes });
};

solicitacoescontroller.post=(req, res) => {
  const { nome, solicitacao, descricao } = req.body;

  const novaSolicitacao = {
    nome,
    solicitacao,
    descricao,
  };

  solicitacoes.push(novaSolicitacao);

  res.status(201).json(novaSolicitacao);
};