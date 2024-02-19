import { useEffect }from 'react'
import { usePostContext } from '../hook/usePost.context'
import {useAuthContext} from '../hook/useAuthContext'
// components
import PostDetails from '../components/post.detail'
import PostForm from '../components/postForm'
import Navbar from '../components/Navbar'
import CentreContainer from './centreContainer'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
const Home = () => {
  const {posts, dispatch} = usePostContext()
  const {user} = useAuthContext()
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('http://localhost:5000/post/get/',{
        headers: {'Authorization': `Bearer ${user.token}`}
      }
      )
      
      const json = await response.json()
    // console.log("dhikcx");
      if (response.ok) {
        dispatch({type: 'SET_POST', payload: json})
        //  console.log(posts);
      }
      // console.log(response);

    }
    
    if (user) {
      fetchPost()
    }

    // fetchPost()
  }, [dispatch,user])
  return (
    <>
    <Navbar/>
      <div className="home">
        <LeftContainer/>
        {/* <div className='centre-container'>
          {posts && posts.map((post,id) => (
            <PostDetails key={id} post={post}/>
          ))}
        </div> */}
        <CentreContainer/>
        <RightContainer/>
      </div>
    </>
  )
}

export default Home