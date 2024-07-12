// Common Helper file for all MGAuthSphere based Authentication

import { parse } from "postcss"

// const API = "https://mgauthsphere.pythonanywhere.com/api/"
const API = "http://127.0.0.1:8000/api/"

// Secret
const TOKEN = "5fcec46340e08e0a9d1c0a36594bef36bbe300e4"

export function createuser(params) {

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
            }
            console.log(e)
            return e
        })
    })
}

export function authenticate(params)
{
    let response = fetch(
        API + "login/",
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
        e.json().then(e=>console.log(e))
        return e
    })
}