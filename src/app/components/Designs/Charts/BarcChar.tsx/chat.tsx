'use client'
import React, {useState} from 'react';
import {ApexOptions} from "apexcharts";
import Charts from 'react-apexcharts'

// export default function BarCharts({data}: {data?: {}}) {
//     function generateDayWiseTimeSeries(baseval: number, count: number, yrange: {min: number; max: number}) {
//         var i = 0;
//         var series = [];
//         while(i < count) {
//             var x = baseval;
//             var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//             series.push([x, y]);
//             baseval += 86400000; // One day in milliseconds
//             i++;
//         }
//         return series;
//     }

//     const [state, setData] = useState({
//     })

//     return (
//         <div className=' z-0 sm:w-full' style={{width: '100%', height: '100%'}} id="chart" >
//             <Charts options={state.options as ApexOptions} series={state.series} type="scatter" height='100%' width='100%' />
//         </div >)





// }


export const BarCharts = () => {
    const options = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: ['Expr', 'Matrix', 'Vector', 'AI'],
        },
    };

    const series = [
        {
            name: 'Production',
            data: [30, 40, 35, 50, 49],
            label: {
                show: false
            }
        },
    ];

    return (
        <div>
            <Charts options={options} series={series} type="bar" height={350} />
        </div>
    );
};

