import React, { Component } from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject, ViewsDirective, ViewDirective,  } from '@syncfusion/ej2-react-schedule';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default class Schedule extends Component {
    constructor(){
        super(...arguments)
          this.state = {
            data: [
              {
              Id: 1,
              Subject: 'Meeting - 1',
              StartTime: new Date(2019, 6, 5, 10, 0),
              EndTime: new Date(2019, 6, 5, 10, 0),
              IsAllDay: false,
              Status: 'Completed',
              Priority: 'High',
              Description: 'ring the door 10 times then spin',
              Location: '5689 s 1280 w, some city'
              },
              {
              Id: 2,
              Subject: 'Fix the thing',
              StartTime: new Date(2019, 6, 5, 12, 0),
              EndTime: new Date(2019, 6, 5, 12, 0),
              IsAllDay: false,
              Status: 'Completed',
              Priority: 'High'
              }
          ]
          }
        }
        onAddClick() {
          let Data = [{
                  Id: 1,
                  Subject: 'Conference',
                  StartTime: new Date(2019, 6, 6, 10, 0),
                  EndTime: new Date(2019, 6, 6, 10, 0),
                  IsAllDay: false
              }, {
                  Id: 2,
                  Subject: 'Meeting',
                  StartTime: new Date(2019, 6, 6, 11, 0),
                  EndTime: new Date(2019, 6, 6, 11, 0),
                  IsAllDay: false
              }];
          this.scheduleObj.addEvent(Data);
          this.buttonObj.element.setAttribute('disabled', 'true');
      }
    render() {
        return (
            <div>
                <ButtonComponent id='add' title='Add' ref={t => this.buttonObj = t} onClick={this.onAddClick.bind(this)}>Add</ButtonComponent>
          <ScheduleComponent
           ref={t => this.scheduleObj = t}
           currentView={'Week'} 
           endHour={'21:00'}
           startHour={'6:00'}
           timeScale={{ enable: true, interval: 60, slotCount: 2 }}
          //  selectedDate= {new Date(2019, 7, 5, 6, 0 )} 
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
