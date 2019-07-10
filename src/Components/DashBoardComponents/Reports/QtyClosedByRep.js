import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import { connect } from 'react-redux'

class QtyClosedByRep extends Component {
  render(){
    console.log(this.props.reduxState.salesBidCount)
    let {salesBidCount} = this.props.reduxState
    let salesNames = []
    let salesCloses = [] 
    salesBidCount.map(salesperson => {
      salesNames.push(salesperson.firstname)
      salesCloses.push(salesperson.bidsclosed)
    })
    return(
      <div className='chart-size-1'>
        <Bar
          data={{labels: salesNames,
          datasets: [
            {
              type: 'bar',
              label: 'Bids Closed',
              backgroundColor: 'rgba(255, 64, 64, 0.9)',
              data: salesCloses
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

function mapStateToProps(reduxState) {
  return {
    reduxState
  }
}

export default connect(mapStateToProps)(QtyClosedByRep)