import React, {Component} from 'react'
// import axios from 'axios'
import {Line} from 'react-chartjs-2'
import axios from 'axios'

class BidsMadeVSClosed extends Component {
  constructor(){
    super()
    this.state = {
      open30: []
    }
  }

  componentDidMount(){
    this.getBidsMade();
  }

  getBidsMade(){
    let date = new Date();
    // axios
    // .post('/bids/reports', {date})
    // .then((res) => {
    //   this.setState({
    //     open30: res.data
    //   })
    // })
    // .catch((err) => 
    //   {if(err) throw err}
    // )
  }

  render(){
    console.log('30 day history:', this.state.open30)
    return(
      <div className='size'>
        <div>
          <Line 
            data={{labels: ['7-3', '7-4', '7-5'],
            datasets: [
              {
                label: 'Bids Made',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1, 
                pointHitRadius: 10,
                data: [60, 50, 40]
              },
              {
                label: 'Bids Closed',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(141, 64, 192, .5)',
                borderColor: 'rgba(141, 64, 192)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(141, 64, 192)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(141, 64, 192)',
                pointHoverBorderColor: 'rgba(141, 64, 192)',
                pointHoverBorderWidth: 2,
                pointRadius: 1, 
                pointHitRadius: 10,
                data: [40, 50, 60]
              }
            ],
            
          }}
            options={{
              title: {
                display: true,
                text: 'Bids Made vs Closed',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'bottom',
                fontSize: 25
              },
              scales: {
                xAxes: [{
                  stacked: true
                }],
                yAxes: [{
                  position: 'left',
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}



export default BidsMadeVSClosed