import { types } from "../types/Types";

export const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload,
            }
        case types.logout:
            return {
                ...state,
                logged: false
            }
        default:
            return state;
    }

} 
export default AuthReducer;
