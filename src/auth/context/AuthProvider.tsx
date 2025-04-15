import { AuthContext } from './AuthContext'

import { ReactNode, useReducer } from 'react';
import AuthReducer from './authReducer';
import { types } from '../types/Types';

const initialState = {
    logged: false
}
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, dispatch] = useReducer(AuthReducer, initialState);

    const login = async(name = '' as string) => {
      const action = {
        type: types.login,
        payload: {
          id: 'ABC',
          name: name
        }
      }
      dispatch(action);
    }
  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    } }>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
