import { useAuthContext } from "./useAuthContext"
import { usePostContext } from "./usePost.context"
export const useLogout = ()=>{
    const {dispatch} = useAuthContext()
    const {dispatch:dispatchPost} = usePostContext()
    const logout = ()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        dispatchPost({type:'SET_POST', payload:null})
    }   
    return logout
}