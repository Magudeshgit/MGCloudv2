import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import Loading from "./pages/loading"

// const API = "https://mgauthsphere.pythonanywhere.com/api/"
const API = "http://127.0.0.1:8000/api/security/"
// const API = 'http://192.168.56.91:5001/api/security/'
// const API = "http://192.168.129.91:8000/api/"

// Secret
const TOKEN = import.meta.env.VITE_MGC_TOKEN//"a3e2935779c2f87c61ab3f54fc953944e94ebf27"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{

    const [user, setuser] = useState({isAuthenticated: false, email: null, fullname: null})
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        checksession()
    },[])

    const authenticate = (params) => {
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
                    localStorage.setItem('uid', f['user_id'])
                    setuser({
                        isAuthenticated: true, 
                        email: f['email'], 
                        fullname: f['first_name']+' '+f['last_name'],
                        uid: f['user_id']
                    })
                    window.location.href = `${window.location.origin}/home`
                    // navigate('/home')
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
                    setuser({
                        isAuthenticated: true, 
                        email: j['data']['email'], 
                        fullname: j['data']['first_name']+' '+j['data']['last_name'],
                        uid: j['data']['user_id']
                    })
                    setuser({isAuthenticated: true, mail: e['data']['email'], userid: e['data']['user_id']})
                }
                return e
            })
        })
    }

    const checksession = () => {
        // Setting loading status
        console.log(window.location.pathname)
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
                    setuser({
                        isAuthenticated: true, 
                        email: j['user']['mail'], 
                        fullname: j['user']['firstname']+' '+j['user']['lastname'],
                        uid: j['user']['user_id']
                    })
                    return navigate(window.location.pathname)
                }
                else
                {
                    setloading(false)
                    setuser({isAuthenticated: false, email: null, fullname: null})
                    return navigate(window.location.pathname)
                }
            })
        })



    }

    return (
        <AuthContext.Provider value={{user,setuser,loading, setloading, authenticate, createuser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const RequireAuth = ({children}) => {
    const {user, setuser, loading, setloading} = useAuth()
    // setloading(true)

    if (user.isAuthenticated)
         return children;
    else
    {
        return <Loading/>
    }
}