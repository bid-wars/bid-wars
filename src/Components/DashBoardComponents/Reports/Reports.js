import React, { Component } from 'react'
import reportsRouter from './reportsRouter';
import { Redshift } from 'aws-sdk';

export default class Reports extends Component {

    handleChartToDisplay = (e) => {
        this.props.history.push(`/dashboard/reports${e.target.value}`)
    }
    
    render() {
        return (
            <div className='reportsTypePlaceholder'>
                <div className='reportsType'>
                    <h2>Report: </h2>
                    <select 
                        onChange={this.handleChartToDisplay}
                    >
                        <option value="">Bids Made vs. Closed</option>
                        <option value="/closedbyrep">Sales by Rep</option>
                    </select>
                </div>
                <div>
                    {reportsRouter}
                </div>
            </div>
        )
    }
}
