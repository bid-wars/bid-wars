import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateNewDate, deleteDay, updateDate} from '../../redux/ownerReducer'
import { ScheduleComponent, Day, Week, Month, Inject, ViewsDirective, ViewDirective,  } from '@syncfusion/ej2-react-schedule';
import axios from 'axios'




 class Schedule extends Component {
    constructor(){
        super(...arguments)
          this.state = {
            data: [],
            newData: []
        
          }
        }
        componentDidMount(){
          axios.get('/events/all').then(res => this.setState({data: res.data}))

        }

      onCreate = (args) => {
        
      //  if(args.requestType === 'eventCreated'){
      //    return this.props.updateNewDate(args.data)
      //  }else if(args.requestType === 'eventRemoved'){
      //    return this.props.deleteDay(args.data[0].Id)
      //  }else if(args.requestType === 'eventChanged'){
      //    return this.props.updateDate(args.data)      
      //  }
      if(args.requestType === 'eventCreated'){
       
          this.setState({
            newData: [...this.state.newData, args.data]
          })
          axios.post('/event/add', {
                    Subject: args.data.Subject ,
                    Description: args.data.Description,
                    Location: args.data.Location,
                    StartTime: args.data.StartTime,
                    EndTime: args.data.endTime    
          }).then(res => {
            this.setState({
              [this.state.newData[-1]]: res.data[0].id,
              [this.state.data[-1]]: res.data[0].id
            })
          })

      }else if(args.requestType === 'eventRemoved'){
          const {Id} = args.data[0]
          let newDates = [...this.state.newData]
          let indexNewDates = newDates.findIndex((date, i) => {
                if(date.Id === Id){
                  return i
                }
          })
          if(indexNewDates !== -1){
            newDates.splice(indexNewDates,1)
                this.setState({
                  newData: newDates
                })
          }
          let dates = [...this.state.data]
          let index = dates.findIndex((date, i) => {
                if(date.Id === Id){
                  return i
                }
          })
          if(index !== -1){
                dates.splice(index,1)
                this.setState({
                  data: dates
                })
          }
          axios.delete('/event/delete', {Id})           
      
      }else if(args.requestType === 'eventChanged'){
        const {
          Subject,
          Description,
          Location,
          StartTime,
          EndTime,
          Id
      } = args.data
        
        let newData = [...this.state.newData]
        
        let indexNewData = newData.findIndex((date, i) => {
              if(date.Id === Id){
                return i
              }
        })
        if(indexNewData !== -1){
          let newArray = Object.assign([], newData,{[indexNewData]: args.data })
          this.setState({
            newData: newArray
          })
        }
        axios.put('/event/update', {
          Subject,
          Description,
          Location,
          StartTime,
          EndTime,
          Id
        })
      }


      }
    render() {
        return (
            <div className='schedule'>
 
          <ScheduleComponent
          //  popupOpen={this.onPopUpOpen}
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
                    <ViewDirective option='Month'/>
                </ViewsDirective>
            <Inject services={[Day, Week, Month]}/>
          </ScheduleComponent>
            </div>
        )
    }
}
function mapStateToProps(state){

  return state
}
export default connect(mapStateToProps, {updateNewDate, deleteDay, updateDate})(Schedule)