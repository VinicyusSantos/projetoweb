import React, { useState, useEffect } from 'react';

import {
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    BarChart,
    PieChart, 
    Pie,
    LabelList,
    Cell,

  } from "recharts";
  
const Indicadores = () => {
    const data = [
        {
          name: 'Torre Eiffel',
          GASTO: 2000000,
          RECEITA: 2500000,
        },
        {
          name: 'Rogerios',
          GASTO: 1500000,
          RECEITA: 2000000,
        },
        {
          name: 'Mansão AW',
          GASTO: 3000000,
          RECEITA: 4000000,
        },
        {
          name: 'Le Parc',
          GASTO: 2500000,
          RECEITA: 2000000,
        },
        {
          name: 'Breakman',
          GASTO: 2000000,
          RECEITA: 2000000,
        },
      ];

      const dataa = [
        {
          name: 'Torre Eiffel',
          SATISFEITOS: 900,
          INSATISFEITOS: 200,
        },
        {
          name: 'Rogerios',
          SATISFEITOS: 500,
          INSATISFEITOS: 199,
        },
        {
          name: 'Mansão AW',
          SATISFEITOS: 100,
          INSATISFEITOS: 50,
        },
        {
          name: 'Le Parc',
          SATISFEITOS: 100,
          INSATISFEITOS: 300,
        },
        {
          name: 'Breakman',
          SATISFEITOS: 700,
          INSATISFEITOS: 650,
        },
      ];

      const dataaa = [
        {
            name: 'Hugo', 
            value: 33,
        },
        {
            name: 'Kaiki', 
            value: 17,
        },
        {
            name: 'Bruno', 
            value: 15,
        },
        {
            name: 'Yuri', 
            value: 35,
        },
      ];

    return (
        <div style={{ textAlign: "center" }}>
        <h1>INDICADORES GRÁFICOS</h1>
        <div className="App">
            <LineChart
                width={800}
                height={450}
                data={data}
                margin={{
                    top: 50,
                    right: 45,
                    left: 25,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="100 1" stroke="white" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Legend
                    content={() => (
                    <div className="custom-legend">
                        <span style={{ fontSize: 20, color: 'green' }}>(RECEITA) v</span>
                        <span style={{ fontSize: 20, color: 'red' }}>s (GASTO)</span>
                    </div>
                    )}
                />
                <Line type="monotone" dataKey="RECEITA" stroke="green" strokeWidth={5} activeDot={{ r: 10 }} />
                <Line type="monotone" dataKey="GASTO" stroke="red" strokeWidth={5} activeDot={{ r: 10 }} />
            </LineChart>

            <BarChart
                width={800}
                height={450}
                data={dataa}
                margin={{
                    top: 100,
                    right: 45,
                    left: 25,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="100 1" />
                <XAxis dataKey="name" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Legend 
                content={() => (
                    <div className="custom-legend">
                        <span style={{ fontSize: 20, color: 'CYAN' }}>(SATISFAÇÃO) v</span>
                        <span style={{ fontSize: 20, color: 'YELLOW' }}>s (INSATISFAÇÃO)</span>
                    </div>
                    )}/>
                <Bar dataKey="INSATISFEITOS" fill="YELLOW" />
                <Bar dataKey="SATISFEITOS" fill="CYAN" />
            </BarChart>
            

            <PieChart width={800} height={550}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={dataaa}
                    cx="50%"
                    cy="50%"
                    outerRadius={175}
                    label
                >
                    {dataaa.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    <LabelList dataKey="name" position="inside" fill="white" />
                </Pie>
                <Tooltip />
                <Legend
                    content={() => (
                    <div className="custom-legend">
                        <span style={{ fontSize: 20, color: 'magenta' }}>(PARTICIPAÇÃO DOS FUNCIONÁRIOS EM OBRAS 0 - 100%)</span>
                    </div>
                    )}
                />
                <style>{`
                    .recharts-pie-sector {
                        fill: magenta;
                    .recharts-pie-label-text{
                        fill: magenta;
                    }
                `}
                </style>
            </PieChart>


        </div>
        </div>
    );
};

export default Indicadores;