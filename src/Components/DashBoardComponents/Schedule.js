import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateNewDate, deleteDay, updateDate} from '../../redux/ownerReducer'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective,  } from '@syncfusion/ej2-react-schedule';


 class Schedule extends Component {
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
      console.log(this.props.schedule)
        return (
            <div className='schedule'>
 
          <ScheduleComponent
           popupOpen={this.onPopUpOpen}
           actionComplete={this.onCreate}
           ref={t => this.scheduleObj = t}
           currentView={'Week'} 
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
                    <ViewDirective option='WorkWeek'/>
                    <ViewDirective option='Month'/>
                </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
          </ScheduleComponent>
            </div>
        )
    }
}
function mapStateToProps(state){

  return state
}
export default connect(mapStateToProps, {updateNewDate, deleteDay, updateDate})(Schedule)