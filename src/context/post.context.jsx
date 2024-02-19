import { createContext, useReducer } from "react";

export const PostContext = createContext()
// console.log(PostContext);
export const postReducer = (state,action)=>{
    switch(action.type){
        case "SET_POST":
            return{
                posts:action.payload
            }
        case "CREATE_POST":
            return{
                posts:[action.payload,...state.posts]
            }
        case "DELETE_POST":
            console.log("Delete action payload:", action.payload);
            return{
                posts:state.posts.filter((w)=>w._id !== action.payload._id)
            }
        default:
            return state
    }   
}
  export const PostContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(postReducer,{
        posts:null
    })
    return (
        <PostContext.Provider value = {{...state,dispatch}}>
            {children}
        </PostContext.Provider>

    )
  }