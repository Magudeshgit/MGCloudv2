import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// const API = "https://mgauthsphere.pythonanywhere.com/api/"
const API = "http://127.0.0.1:8000/api/"

// Secret
const TOKEN = "5fcec46340e08e0a9d1c0a36594bef36bbe300e4"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{

    const [user, setuser] = useState({isAuthenticated: false, email: null})
    const navigate = useNavigate()

    useEffect(()=>{
        checksession()
    })

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
            e.json().then(f=>{
                if (f['status'] === 'success')
                {
                    sessionStorage.setItem('mc_lb', f['session_id'])
                    setuser({isAuthenticated: true, email: f['email']})
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
                    sessionStorage.setItem("session_id", e['data']['session_id'])
                    setuser({isAuthenticated: true, email: e['data']['email']})
                }
                return e
            })
        })
    }

    const checksession = () => {
        if (sessionStorage.getItem('mc_lb'))
        {
            return null
        }
        else
        {
            setuser({isAuthenticated: true})
            return navigate('/home')
        }
    }

    return (
        <AuthContext.Provider value={{user, authenticate, createuser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const RequireAuth = ({children}) => {
    const {user} = useAuth()
    const navigate = useNavigate()
    if (user.isAuthenticated) return {children}
    else navigate('/signup')
}