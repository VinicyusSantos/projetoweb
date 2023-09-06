import express from 'express'

export const obrascontroller = express.Router()
export const obrasadd = express.Router()

const obras = [
    {
        id: 0,
        local: 'Parque Recife',
        custo: '50.000'
    },
    {
        id: 1,
        local: 'Escola',
        custo: '150.000'
    }
]

//visualização de obras especificas
obrascontroller.post = (req, res) => {
    const { id } = req.body;

    if (id >= 0 && id < obras.length) {
        const obra = obras[id];
        res.status(200).json(obra);
    } else {
        res.status(404).json({ error: 'Obra não encontrada' });
    }
}

//adicionando novas obras
obrasadd.post = (req, res) => {
    const { local, custo } = req.body;
  
    const novaObra = {
      id: obras.length,
      local,
      custo,
    };
  
    obras.push(novaObra);
  
    res.status(201).json(novaObra);
  }
  
  
  
  
  
  
  