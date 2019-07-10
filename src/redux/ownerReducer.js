
const initialState = {
    firstname: '',
    lastname: '',
    companyName: '',
    website: '',
    phone: '',
    email:  '',
    logo: '',
    user_id: null,
    bids: [],
    schedule: [],
    role: ''
    
}

    const UPDATE_USER = 'UPDATE_USER'
    const UPDATE_NEW_DATE = 'UPDATE_NEW_DATE'
    const DELETE_DAY = 'DELETE_DAY'
    const UPDATE_DATE = 'UPDATE_DATE'
    const LOGOUT = 'LOGOUT'
   

    export function addUserInfo(user){
        return{
            type: UPDATE_USER,
            payload: user
        }
    }
    export function updateNewDate(newDate){
            return {
                type: UPDATE_NEW_DATE,
                payload: newDate
            }
        }
    export function deleteDay(id){
            return {
                type: DELETE_DAY,
                payload: id
            }
    }
    export function updateDate(info){
            return {
                type: UPDATE_DATE,
                payload: info
            }
    }
    export function logOut(){
            return {
                type: LOGOUT
            }
    }
    


function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            console.log(action.payload)
            const {firstname,
            lastname,
            name,
            website,
            phone,
            email,
            logo,
            user_id,
            bids,
            schedule,
            role    
            } = action.payload
           
            return {firstname,
                lastname,
                companyName: name,
                website,
                phone,
                email,
                logo,
                user_id,
                bids,
                schedule,
                role}
                
        case UPDATE_NEW_DATE:
          
                let {
                    Subject,
                    Description,
                    Location,
                    StartTime,
                    EndTime,
                    Id
                } = action.payload
                return {
                    ...state,
                    schedule: [...state.schedule, {
                        Subject,
                    Description,
                    Location,
                    StartTime,
                    EndTime,
                    Id
                    }]
                }
                    
               
                
        case DELETE_DAY:
         
               let find = state.schedule.map((day, i) => {
                   
                   if(day.Id === action.payload){
                        state.schedule.splice(i,1)
                   }
               })
               return {...state}
                
            case UPDATE_DATE:
                   
                    let finding = state.schedule.map((day, i) => {
                   
                        if(day.Id === action.payload.Id){
                             let {
                                Subject,
                                Description,
                                Location,
                                StartTime,
                                EndTime,
                                Id
                            } = action.payload
                         
                            state.schedule[i] = {
                                Subject,
                                Description,
                                Location,
                                StartTime,
                                EndTime,
                                Id
                            }
                        }
                    })
                    return {...state}
                case LOGOUT: 
                   return {...initialState}
                
                
        default:
             return state
    }
    
}

export default reducer