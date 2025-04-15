import { AuthContext } from './AuthContext'

import { ReactNode, useReducer } from 'react';
import AuthReducer from './authReducer';
import { types } from '../types/Types';

const initialState = {
    logged: false
}

const init =()=>{
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    logged: !!user,
    user: user
  }
}
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {initialState},init);

    const login = async(name = '' as string) => {
      const user = {id: 'ABC',name}
      
      const action ={
        type: types.login,
        payload: user
      }
      localStorage.setItem('user', JSON.stringify(user));
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
