const initialState = {
    first_name: '',
    last_name: '',
    company_name: '',
    website: '',
    phone1: '',
    phone2: '',
    email:  '',
    logo: '',
    user_id: null,
    bids: [],
    schedule: []
}

    const UPDATE_USER = 'UPDATE_USER'

    export function updateUser(user){
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
            phone1,
            phone2,
            email,
            logo,
            user_id,
            bids,
            schedule    
            } = action.payload
            return {first_name,
                last_name,
                company_name,
                website,
                phone1,
                phone2,
                email,
                logo,
                user_id,
                bids,
                schedule}
        default: return state
    }
    
}

export default ownerReducer