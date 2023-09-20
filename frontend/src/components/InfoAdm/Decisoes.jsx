import React, { useState, useEffect } from 'react';
import '/src/styles/Decisoes.css';
import CardDecis from './Cards/CardDecis';


export function Decisoes(){
    return (

            <div className='apx'>
                <h1>DECISÕES</h1>
                <CardDecis
                title='Le Parc'
                imageUrl='https://cdn-biasi.blueintra.com/images/lot/13/10/500/1310552.jpg'
                body='Visto que não obtivemos lucro na obra do Le Parc, gerando um prejuízo de R$500.000,00, e sabendo também que 300 pessoas se mostraram insatisfeitas com a finalização da obra, são necessárias medidas administrativas, com o intuito de melhorar o índice de satisfação dos clientes e também evitar erros e prejuízos na construção de obras futuras.'
                />
                <CardDecis
                title='Breakman'
                imageUrl='https://s2-casavogue.glbimg.com/RtKVl_tVa-2KK7Uxd7nvVhPJs3A=/0x0:1467x828/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/D/c/nLR1CzSuAFdDA6MKHsPw/img-6069.jpg'
                body='Considerando que a obra "Breakman" não apresentou lucro nem prejuízo financeiro, mantendo-se em um equilíbrio entre gastos e receitas, essa situação também demanda atenção e ações administrativas. Além disso, observamos que uma parcela considerável de clientes expressou insatisfação com a conclusão do projeto.'
                />
                <div className='medidas'>
                <div className='medidasleparc'>
                <ul>
                    <li><pm>1- TREINAMENTO EXTENSO DE EQUIPE:</pm> Fornecer treinamento adicional à equipe de construção, destacando a importância do atendimento ao cliente e da excelência na execução do projeto.</li>

                    <li><pm>2- GERENCIAMENTO DE RISCOS:</pm> Implementar uma estratégia mais robusta de gerenciamento de riscos para evitar surpresas financeiras no futuro. Isso pode incluir a análise cuidadosa de orçamentos e cronogramas.</li>

                    <li><pm>3- PESQUISA DE MERCADO DINÂMICO:</pm> Realizar pesquisas de mercado para entender as demandas e preferências dos clientes, a fim de alinhar futuros projetos de construção com suas expectativas.</li>
                </ul>
                </div>
                <div className='medidasbreakman'>
                <ul>
                    <li><pm>1- FEEDBACK MINUCIOSO DOS CLIENTES:</pm> Analisar minuciosamente o feedback das pessoas insatisfeitas para identificar as principais áreas de preocupação. Isso pode ser feito por meio de pesquisas, reuniões ou análise de redes sociais.</li>

                    <li><pm>2- MELHORIA NA TRANSPARÊNCIA:</pm> Reforçar a comunicação com os clientes durante todo o processo da obra "Breakman". Manter os clientes atualizados sobre o progresso, atrasos ou mudanças no projeto, promovendo a transparência.</li>

                    <li><pm>3- APRIMORAMENTO DE QUALIDADE:</pm> Investir na qualidade dos materiais, mão de obra e processos de construção para garantir que o resultado final atenda às expectativas dos clientes.</li>
                </ul>
                </div>
                </div>
            </div>
    )
}
export default Decisoes;