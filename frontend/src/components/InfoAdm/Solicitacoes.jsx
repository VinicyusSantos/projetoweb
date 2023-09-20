import React, { useState, useEffect } from 'react';
import SolicitacoesJJ from '../InfoAdm/Cards/SolicitacoesJJ';
import SolicitacoesMM from '../InfoAdm/Cards/SolicitacoesMM';

export function Solicitacoes(){
    return( 
    <div className = 'app'>
        <SolicitacoesMM
        title='Material Extra'
        imageUrl='https://imagens-revista-pro.vivadecora.com.br/uploads/2018/08/calculo-da-argamassa-tijolos-e-blocos-redimensionado.png'
        body='Precisamos de um novo carregamento de tijolos e argamassa para reparos estruturais na garagem do bloco C em nossa obra do LeParc. Temos indícios que o clima úmido comprometeu a estrutura, fazendo-se necessário reparos.'
        />

        <SolicitacoesJJ
        title ='Mão de Obra Adicional'
        imageUrl='https://i.pinimg.com/564x/f8/c0/a6/f8c0a60939f4ba0b57dd27cd94f2463c.jpg'
        body='Tendo em vista os curtos prazos que foram destinados a nossas recentes obras de grande porte, solicitamos dois novos profissionais na função de operadores de máquinas para normalizar nossa eficiência nas obras.'
        />


    </div>
    );
}
export default Solicitacoes