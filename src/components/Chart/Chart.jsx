import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgb(255, 211, 55,0.5)', 'rgb(67, 202, 84,0.5)', 'rgba(246, 81, 100, 0.5)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#ffd337',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#F65164',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;












// import React, {useState, useEffect} from "react";
// import {fetchDailyData} from "../../api";
// import {Line, Bar } from "react-chartjs-2";
// import styles from "./Chart.module.css";


// const Charts = () =>{
    
//         const [dailyData, setDailyData] = useState([]);

//         useEffect(() => {
//             const fetchAPI = async () => {
//                  setDailyData(await fetchDailyData());
//             }

//             fetchAPI()
//         },[dailyData]);

//         const lineChart =(
//             dailyData.length ? (
 
//                 <Line 
//                 data ={{
//                     labels: dailyData.map(({ date })=> date),
//                     datasets:[{
//                        data: dailyData.map(({confirmed}) => confirmed),
//                        label: "Infected",
//                        borderColor:"#3333ff",
//                        fill: true,
//                     },{
//                         data: dailyData.map(({deaths}) => deaths),
//                         label: "Deaths",
//                         borderColor:"blue",
//                         backgroundColor:"rgba(255,0,0,0.5)",
//                         fill: true
//                     }]
//                 }}
//             />
//              ) : null
//         );

//         return(
//         <h1>
//             <div className ={styles.container}>
//                 {lineChart}
//             </div>
//         </h1>
//     )
// }

// export default Charts;