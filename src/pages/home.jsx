import {useEffect} from 'react'
import { useAuth } from '../authcontext'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if (!user['isAuthenticated']) navigate('/signin')
  },[])

  return (
    <div>This is test!</div>
  )
}   

export default Test