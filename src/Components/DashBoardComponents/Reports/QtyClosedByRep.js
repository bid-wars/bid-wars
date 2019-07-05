import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'


class QtyClosedByRep extends Component {

  render(){
    return(
      <div className='chart-size-1'>
        <Bar
          data={{labels: ['john', 'jack', 'jill', 'Deborah'],
          datasets: [
            {
              type: 'bar',
              label: 'Bids Closed',
              backgroundColor: 'rgba(217, 83, 79, 0.75)',
              data: [10, 11, 12, 13]
            }

          ]
          }}
          options={{
            title: {
              display: true,
              text: 'Closed By Sales Rep',
              fontSize: 25
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
                  beginAtZero: true,
                }
              }]
            }
          }}
        />
      </div>
    )
  }
}
export default QtyClosedByRep