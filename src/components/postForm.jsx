import { useState } from 'react'
import { usePostContext } from '../hook/usePost.context'
import { useAuthContext } from '../hook/useAuthContext'
// import { useState } from 'react'
export default function postForm() {
    const {dispatch} = usePostContext()
    const [author, setauthor] = useState('')
    const [message, setMessage] = useState('')
    const [like, setlike] = useState([])
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const {user} = useAuthContext()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user){
          setError("tu dois connecter ")
          return
        }
        const post = {message,author}
    
        const response = await fetch('http://localhost:5000/post/', {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
          setauthor('')
          // setLoad('')
          setlike([])
          setError(null)
          setEmptyFields([])
          console.log('new post added', json)
          dispatch({type: 'CREATE_POST', payload: json})
        }
      }
    return (
        <form className="create" onSubmit={handleSubmit}>
        <h3>Ajouter un message</h3>
  
        <label>Message</label>
        <input 
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={emptyFields.includes('title') ? 'error' : ''}
        />
  
        <label>Author:</label>
        <input 
          onChange={(e) => setauthor(e.target.value)}
          value={author}
          className={emptyFields.includes('load') ? 'error' : ''}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
      )
}
