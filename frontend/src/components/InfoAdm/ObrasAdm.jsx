import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';


export function ObrasAdm(){
    const [nomeObra1, setnomeObra1] = useState([]);
    const [nomeObra2, setnomeObra2] = useState([]);
    const [nomeObra3, setnomeObra3] = useState([]);
    const [nomeObra4, setnomeObra4] = useState([]);
    const [nomeObra5, setnomeObra5] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/dados')
      .then(function (response) {
        const obras = response.data;
        const aux1 = obras.find(obra => obra.nome === 'Torre Eiffel');
        setnomeObra1(aux1.nome);

        const aux2 = obras.find(obra => obra.nome === 'Rogerios');
        setnomeObra2(aux2.nome);

        const aux3 = obras.find(obra => obra.nome === 'Mansão AW');
        setnomeObra3(aux3.nome);

        const aux4 = obras.find(obra => obra.nome === 'Le Parc');
        setnomeObra4(aux4.nome);

        const aux5 = obras.find(obra => obra.nome === 'Breakman');
        setnomeObra5(aux5.nome);

      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

    return (

    <div className='App'>
        <Card
        title='Torre Eiffel'
        imageUrl='https://f.i.uol.com.br/fotografia/2019/05/21/15584836365ce492b47c7c8_1558483636_3x2_rt.jpg'
        body='Imagine possuir um dos ícones mais reconhecidos do mundo, a majestosa Torre Eiffel! Esta é a sua chance de tornar seus sonhos realidade.'
        />
        <Card
        title='Rogerios'
        imageUrl='https://images.axios.com/skpkBe_uWLPLI1cgG63jwttto14=/0x253:8232x4884/1920x1080/2023/05/26/1685120985250.jpg'
        body='Passeie por esse lugar de conexão com a natureza, dentro de uma mata atlântica bela. Um lugar com muita privacidade, água de nascente cristalina e muitas belezas naturais.'
        />
        <Card
        title='Mansão AW'
        imageUrl='https://cf.bstatic.com/xdata/images/hotel/max1024x768/211728715.jpg?k=4f1aca753075eb6647449375bd7e67645d2d883d4db72c821f77a15b3a7fd3ac&o=&hp=1'
        body='Venha curtir a Praia de Sibaúma em uma Mansão espaçosa e confortável com muito espaço para aproveitar entre família e amigos.'
        />
        <Card
        title='Le Parc'
        imageUrl='https://cdn-biasi.blueintra.com/images/lot/13/10/500/1310552.jpg'
        body='Experencie um novo jeito de morar: perto da natureza tranquila do Parque dos Manguezais e próximo ao mar serenamente agitado de Boa Viagem.'
        />
        <Card
        title='Breakman'
        imageUrl='https://s2-casavogue.glbimg.com/RtKVl_tVa-2KK7Uxd7nvVhPJs3A=/0x0:1467x828/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/D/c/nLR1CzSuAFdDA6MKHsPw/img-6069.jpg'
        body='Desfrute de um dia na piscina enquanto nosso mordomo lhe serve bebidas ou faça uma rápida viagem de 3 minutos de carrinho de golfe até a praia ou o Centro de Tênis. '
        />
    </div>

    );
}
export default ObrasAdm