import React from "react";
import {Container} from "react-bootstrap";
import {Line} from 'react-chartjs-2';

const currYear = new Date().getFullYear();
const state = {
  labels: [currYear, currYear+1, currYear+2,
          currYear+3, currYear+4,currYear+5,currYear+6,
          currYear+7,currYear+8, currYear+9],
  datasets: [
    {
      label: 'Value',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(250,0,0,1)',
      borderColor: 'rgba(250,0,0,1)',
      borderWidth: 2,
      // TODO import data (these are just dummy values)
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Investment Forecast Over 10 Years',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}




// const ForecasterHome = () => {
//   return (
//     <>
//        <div>
//             <h3>Investment Forecaster</h3>
//             {/* <p>Logic goes here</p> */}
//             <Container>Chart goes here</Container>
            
//             <Container>User input here</Container>
//           </div>
//     </>
//   );
// };

// export default ForecasterHome;
