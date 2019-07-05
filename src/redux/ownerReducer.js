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

    export function addUserInfo(user){
        console.log(user)
        return{
            type: UPDATE_USER,
            payload: user
        }
    }

function ownerReducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
            const {first_name,
            last_name,
            company_name,
            website,
            phone,
            email,
            logo,
            user_id,
            bids,
            schedule,
            role    
            } = action.payload
            return {first_name,
                last_name,
                company_name,
                website,
                phone,
                email,
                logo,
                user_id,
                bids,
                schedule,
                role}
        default: return state
    }
    
}

export default ownerReducer