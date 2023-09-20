import express from 'express'

export const obrascontroller = express.Router()
export const obrasadd = express.Router()
export const obrasremove = express.Router()

const obras = [
    {
        id: 0,
        nome: 'Torre Eiffel',
    },
    {
        id: 1,
        nome: 'Rogerios',
    },
    {
        id: 2,
        nome: 'Mansão AW',
    },
    {
        id: 3,
        nome: 'Le Parc',
    },
    {
        id: 4,
        nome: 'Breakman',
    }
]

obrascontroller.get = (req, res) => {
    res.send(obras)
}

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

//removendo obras
obrasremove.delete = (req, res) => {

    const obraId = parseInt(req.params.id);

    // Vendo se a obra com o ID digitado existe
    const obraIndex = obras.findIndex((obra) => obra.id === obraId);

    if (obraIndex === -1) {
        res.status(404).json({ error: 'Obra não encontrada' });
    } else {
        // Removendo obra e atualizando o id
        obras.splice(obraIndex, 1);
        res.status(200).json({ message: `Obra com ID ${obraId} foi excluída` });

        for (let i = 0; i < obras.length; i++) {
            obras[i].id = i;
        }
    }
}