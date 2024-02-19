import { useContext } from "react";
import { PostContext } from "../context/post.context";

export const usePostContext = ()=>{
    
    const context = useContext(PostContext);
    // console.log(context);
    if(!context){
        throw Error("usePostContext must be inside PostContext")
    }
    return context
}