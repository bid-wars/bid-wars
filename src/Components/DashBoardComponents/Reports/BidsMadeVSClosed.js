import React, {Component} from 'react'
// import axios from 'axios'
import {Line} from 'react-chartjs-2'
import { connect } from 'react-redux'

class BidsMadeVSClosed extends Component {

  render(){
    function dateArray () {
      let last30 = []
      let today = new Date()
      for (let i = 30; i >= 1; i--){
        let today = new Date()
        let day = today.setDate(today.getDate() - i)
        let formatedDay = String(new Date(day)).slice(4, 10)
        last30.push(formatedDay)
      }
      return last30
    } 
    let {open30Bids, closed30Bids} = this.props.reduxState
    return(
      <div className='size'>
        <div>
          <Line 
            data={{labels: dateArray(),
            datasets: [
              {
                label: 'Bids Made',
                fill: false,
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
                data: open30Bids
              },
              {
                label: 'Bids Closed',
                fill: false,
                backgroundColor: 'rgba(255, 64, 64, 0.9)',
                borderColor: 'rgba(255, 64, 64)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 64, 64)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 64, 64)',
                pointHoverBorderColor: 'rgba(255, 64, 64)',
                pointHoverBorderWidth: 2,
                pointRadius: 1, 
                pointHitRadius: 10,
                data: closed30Bids
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

function mapStateToProps(reduxState) {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(BidsMadeVSClosed)