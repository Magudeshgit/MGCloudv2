import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import Loading from "./pages/loading"

// const API = "https://mgauthsphere.pythonanywhere.com/api/"
const API = "http://127.0.0.1:8000/api/"
// const API = "http://192.168.129.91:8000/api/"

// Secret
const TOKEN = "5fcec46340e08e0a9d1c0a36594bef36bbe300e4"//"a3e2935779c2f87c61ab3f54fc953944e94ebf27"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{

    const [user, setuser] = useState({isAuthenticated: false, email: null, fullname: null})
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        checksession()
    },[])

    const authenticate = (params) => {
        console.log(params)
        let response = fetch(
            API + "authenticate/",
            {
                method: "post",
                headers:
                {
                    "content-type": "application/json",
                    "Authorization": "Token " + TOKEN
                },
                body: JSON.stringify(params),
            }
    
        )
        return response.then(e=>{
            return e.json().then(f=>{
                console.log(f)
                if (f['status'] === "success")
                {
                    localStorage.setItem('mc_lb', f['session_id'])
                    localStorage.setItem('pe_es', f['session_expiry'])
                    setuser({isAuthenticated: true, email: f['email']})
                    navigate('/home')
                }
                return f
            })
        })
    }

    const createuser = (params) => {
        let response = fetch(
            API + "createuser/",
            {
                method: "post",
                headers:
                {
                    "content-type": "application/json",
                    "Authorization": "Token " + TOKEN
                },
                body: JSON.stringify(params),
            }
    
        )
        return response.then(e=>{
            e.json().then(e=>{
                if (e['status'] === 'success')
                {
                    localStorage.setItem("session_id", e['data']['session_id'])
                    setuser({isAuthenticated: true, email: e['data']['email']})
                }
                return e
            })
        })
    }

    const checksession = () => {
        // Setting loading status
        setloading(true)


        const session = localStorage.getItem('mc_lb')
        if (session === null) 
        {
            setuser({isAuthenticated: false, email: null, fullname: null}); return navigate('/')  
        }
        // else
        // {
        //     const session_expiry = new Date(localStorage.getItem('pe_es'))
        //     const today = new Date()
        //     if (today < session_expiry )
        //     {
        //         return navigate('/home')
        //     }

        // }   

        let params = {
            session_id: session
        }
        let response = fetch(
            API + "checksession/",
            {
                method: "post",
                headers:
                {
                    "content-type": "application/json",
                    "Authorization": "Token " + TOKEN
                },
                body: JSON.stringify(params),
            }
        )
        response.then(e=>{
            e.json().then(j=>{
                if (j['status'] === "success")
                {
                    setloading(false)
                    setuser({isAuthenticated: true, email: j['email'], fullname: j['first_name']+' '+j['last_name']})
                    return navigate('/home')
                }
                else
                {
                    setloading(false)
                    setuser({isAuthenticated: false, email: null, fullname: null})
                    return navigate('/')
                }
            })
        })



    }

    return (
        <AuthContext.Provider value={{user,setuser, authenticate, createuser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const RequireAuth = ({children}) => {
    const {user, setuser} = useAuth()
    if (!user.isAuthenticated)
    {
        return <Navigate to="/"/>
    }
    else
    {
        return children
    }
    
}