import React, { useState, useEffect } from 'react';

//rotas temporarias adm
import ObrasAdm from '../components/InfoAdm/ObrasAdm';
import Decisoes from '../components/InfoAdm/Decisoes.jsx'
import Funcionarios from '../components/InfoAdm/Funcionarios.jsx'
import Indicadores from '../components/InfoAdm/Indicadores.jsx'
import Solicitacoes from '../components/InfoAdm/Solicitacoes.jsx'

import Obrasfuncionario from '../components/InfoEmployee/ObrasFuncionario.jsx'
import Solicicacoes from '../components/InfoEmployee/Solicicacoes.jsx'



export function Info(){
    const [i, seti] = useState(null);

  useEffect(() => {
    const iSimulada = localStorage.getItem('i');
    seti(iSimulada);
  }, []);

  if (i === '0') {
    return <ObrasAdm />;
    } 
    else if (i === '1'){
        return <Indicadores />;
        }
    else if (i === '2'){
        return <Funcionarios />;
        }
    else if (i === '3'){
        return <Solicitacoes />;
        }
    else if (i === '4'){
        return <Decisoes />;
        }
    else if (i === '5'){
        return <Obrasfuncionario />;
        }
    else if (i === '6'){
        return <Solicicacoes />;
        }
}


export default Info