import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateNewDate, deleteDay, updateDate} from '../../redux/ownerReducer'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective,  } from '@syncfusion/ej2-react-schedule';

 class MainDash extends Component {
     constructor(){
         super(...arguments)
         this.state = {
             data: this.props.schedule
         }
     }
     onCreate = (args) => {

        if(args.requestType === 'eventCreated'){
          return this.props.updateNewDate(args.data)
        }else if(args.requestType === 'eventRemoved'){
          return this.props.deleteDay(args.data[0].Id)
        }else if(args.requestType === 'eventChanged'){
          return this.props.updateDate(args.data)      
        }
 
       }
    render() {
        console.log(this.props)
        return (
            <div className='mainDash'>
                <div className='top'>
                <h1 className='customername'>Welcome back Bilbo</h1>
               
                </div>
                <div className='bottom'>
                    <div className='leftdiv'>
                        <div className='schedule'>
                            <h1>Appointments Today</h1>
                            <div className='scheduleBox'>
                            <ScheduleComponent
           popupOpen={this.onPopUpOpen}
           actionComplete={this.onCreate}
           ref={t => this.scheduleObj = t}
           currentView={'Day'} 
           endHour={'21:00'}
           startHour={'8:00'}
           timeScale={{ enable: true, interval: 60, slotCount: 2 }}

           eventSettings={ { 
             dataSource: this.state.data,
             fields: {
              id: 'Id',
              subject: { name: 'Subject' },
              isAllDay: { name: 'IsAllDay' },
              startTime: { name: 'StartTime' },
              endTime: { name: 'EndTime' }
          }
          } }
          >
                  <ViewsDirective>
                    <ViewDirective option='Day'/>
                    <ViewDirective option='Week'/>
                    <ViewDirective option='Month'/>
                </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
          </ScheduleComponent>
                            </div>
                        </div>
                        <div className='bidchart'>
                            <h1>Bids Made VS. Closed</h1>
                            <div className='bidchartBox'></div>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='unacceptedBox'>
                            <h1>Unaccepted Bids</h1>
                            <div className='bidsBox'></div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {updateNewDate, deleteDay, updateDate})(MainDash)