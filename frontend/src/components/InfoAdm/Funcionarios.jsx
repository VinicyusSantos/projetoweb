import React, { useState, useEffect } from 'react';
import CardFunc from './Cards/CardFunc';

export function Funcionarios(){
    return( 
        <div className = 'appo'>
            <h1>QUADRO DE FUNCIONÁRIOS</h1>
            <CardFunc
             title='Hugo Alexsanderson'
             imageUrl='https://derivates.kicker.de/image/upload/c_crop,x_0,y_204,w_4000,h_2250/w_1000,q_auto/v1/2021/08/05/4ba7fc98-4aa4-4213-b742-9bd407fbb6ff.jpeg'
             body='Funcionário singular, a engrenagem motriz da empresa, muito dedicado e uma inspiração para seus colegas.'
             atributo1='INICIATIVA: 8.0'
            atributo2='CRIATIVIDADE: 8.5'
            atributo3='EXPERIÊNCIA: 4.0'
            atributo4='COMUNICAÇÃO: 7.0'
            atributo5='CONHECIMENTO: 7.0'
             />
            <CardFunc
            title='Kaiki Carvalho'
            imageUrl='https://img.freepik.com/fotos-premium/artista-masculino-posando-com-sua-pintura-dentro-do-estudio-de-arte-de-desenho-de-fundo-branco_140725-161472.jpg' 
            body='Arquiteto criativo que fica responsável por desenhar e projetar as obras mais importantes da empresa.'
            atributo1='INICIATIVA: 2.0'
            atributo2='CRIATIVIDADE: 10.0'
            atributo3='EXPERIÊNCIA: 4.0'
            atributo4='COMUNICAÇÃO: 6.0'
            atributo5='CONHECIMENTO: 9.0'
            />
            <CardFunc
            title='Yuri Lima'
            imageUrl='https://media.istockphoto.com/id/1346124841/pt/foto/successful-construction-site-worker-thinking.jpg?s=612x612&w=0&k=20&c=mrXcKjDUmzHKVctB565RZQqXDKxZSP65E8JCXvutlvs='
            body='Peão e colaborador mais experiente que temos, mantém a eficiência dos trabalhadores em dia.' 
            atributo1='INICIATIVA: 8.0'
            atributo2='CRIATIVIDADE: 7.5'
            atributo3='EXPERIÊNCIA: 9.5'
            atributo4='COMUNICAÇÃO: 8.0'
            atributo5='CONHECIMENTO: 7.5'
            />
            <CardFunc
            title='Bruno Reis'
            imageUrl='https://img.freepik.com/fotos-gratis/jovem-negro-com-planta-perto-de-um-predio-de-vidro_1157-50906.jpg' 
            body='Trabalhador com sólida formação prática, responsável pela segurança de trabalho nos ambientes da empresa.'
            atributo1='INICIATIVA: 6.5'
            atributo2='CRIATIVIDADE: 8.0'
            atributo3='EXPERIÊNCIA: 8.0'
            atributo4='COMUNICAÇÃO: 5.0'
            atributo5='CONHECIMENTO: 6.5'
            />
        </div>
    );   
}
export default Funcionarios