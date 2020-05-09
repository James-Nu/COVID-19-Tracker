
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <h3  gutterBottom>
              Infected
            </h3>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <h3>
              {new Date(lastUpdate).toDateString()}
            </h3>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <h3  gutterBottom>
              Recovered
            </h3>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <h3>
              {new Date(lastUpdate).toDateString()}
            </h3>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <h3 color="textSecondary" gutterBottom>
              Deaths
            </h3>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <h3>
              {new Date(lastUpdate).toDateString()}
            </h3>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;














// import React from "react";
// import {Card, CardContent,Typography,Grid} from "@material-ui/core/";
// import CountUp from "react-countup";
// import cx from "classnames"





// import styles from "./Cards.module.css";




// const Cards = ({data:{ confirmed,recovered, deaths, lastUpdate } }) =>{
//     if(!confirmed){
//         return "loading..."
//     }

//     return(
//        <div className={styles.container}>
//         <Grid container spacing={3} justify="center">
//             <Grid item component={Card}  xs={12} md={3} className ={cx(styles.card, styles.infected)}>
//                 <CardContent>
//                     <Typography color="textSecondary">Infected</Typography>
//                     <Typography variant="h5">
//                         <CountUp start={0} end={confirmed.value} duration={2.5}   separator=","/> 
//                     </Typography>
//                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                     <Typography variant="body2">Active Cases</Typography>
//                 </CardContent>
//             </Grid>


//                 <Grid item component={Card} xs={12} md={3} className ={cx(styles.card, styles.recovered)}>
//                 <CardContent>
//                     <Typography color="textSecondary" >Recovered</Typography>
//                     <Typography variant="h5">
//                         <CountUp start={0} end={recovered.value} duration={2.5}   separator=","/> 
//                     </Typography>
//                     <Typography  color ="primary" >{new Date(lastUpdate).toDateString()}</Typography>
//                     <Typography variant="body2"  >Number of Recoveries</Typography>
//                 </CardContent>
//                 </Grid>

//             <Grid item component={Card}   xs={12} md={3} className ={cx(styles.card, styles.deaths)}>
//                 <CardContent>
//                     <Typography color="textSecondary">Deaths</Typography>
//                     <Typography variant="h5">
//                     <CountUp start={0} end={deaths.value} duration={2.5}   separator=","/> 
//                     </Typography>
//                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                     <Typography variant="body2">Number of Deaths</Typography>
//                 </CardContent>
//             </Grid>
//         </Grid>
//        </div>
//     )
// }

// export default Cards;

