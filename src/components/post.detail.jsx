import { usePostContext } from "../hook/usePost.context";
import { useAuthContext } from "../hook/useAuthContext";
//date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const postDetails =({post})=>{
  const {dispatch} = usePostContext()
  const {user} = useAuthContext() 
  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch('http://localhost:5000/post/' + post._id, {
      method: 'DELETE',
      headers:{'Authorization': `Bearer ${user.token}`}
    })
    const json = await response.json()

    if (response.ok) {
      console.log('Post deleted successfully');
      dispatch({type: 'DELETE_POST', payload: json})
      // console.log(dispatch);
    }
  }
  return (
    <div className="post-details">
      <h4>message: {post.message}</h4>
      <p>author: {post.author}</p>
      {/* <p>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</p> */}
      {/* <span className="" onClick={handleClick}>delete</span> */}
      <button onClick={handleClick}>delete</button>
    </div>
  )
}
export default postDetails;