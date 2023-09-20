import React, { useState, useEffect } from 'react';
import CardFunc from './Cards/CardFunc';

export function Funcionarios(){
    return( 
        <div className = 'app'>
            <CardFunc
             title='Hugo'
             imageUrl='https://pbs.twimg.com/media/F2oM8TEXMAIwCVp.jpg:large'
             body='Funcionário singular, a engrenagem motriz da empresa, muito dedicado e uma inspiração para seus colegas.'
             />
            <CardFunc
            title='Kaiki'
            imageUrl='https://img.freepik.com/fotos-premium/artista-masculino-posando-com-sua-pintura-dentro-do-estudio-de-arte-de-desenho-de-fundo-branco_140725-161472.jpg' 
            body='Arquiteto criativo que fica responsável por desenhar e projetar as obras mais importantes da empresa.'
            />
            <CardFunc
            title='Yuri Lima'
            imageUrl='https://media.istockphoto.com/id/1346124841/pt/foto/successful-construction-site-worker-thinking.jpg?s=612x612&w=0&k=20&c=mrXcKjDUmzHKVctB565RZQqXDKxZSP65E8JCXvutlvs='
            body='Peão e colaborador mais experiente que temos, Mantém a eficiência dos trabalhadores em dia.' 
            />
            <CardFunc
            title='Bruno'
            imageUrl='https://img.freepik.com/fotos-gratis/jovem-negro-com-planta-perto-de-um-predio-de-vidro_1157-50906.jpg' 
            body='Trabalhador com sólida formação prática, responsável pela segurança de trabalho nos ambientes da empresa.'
            />
        </div>
    );   
}
export default Funcionarios