// MGCloud API Logging and Retrieving Operations
const cloudapi = 'http://127.0.0.1:8000/api/cloud/'
import axios from "axios"
const MGC_SECRET = import.meta.env.VITE_MGC_TOKEN

export function getUserFiles(userid) {
    const filerequest = new Promise((resolve, reject)=>{
        axios.post(cloudapi+'userfiles/',
            {
                userid: userid
            },
            {
                headers: {
                    Authorization: `Token ${MGC_SECRET}`
                }
            }
        ).then(e=>{return resolve(e.data)} )
    })
    return filerequest
}

export function getUserDirectories(userid) {
    const folderrequest = new Promise((resolve, reject)=>{
        axios.post(cloudapi+'userdirectories/',
            {
                userid: userid
            },
            {
                headers: {
                    Authorization: `Token ${MGC_SECRET}`
                }
            }
        ).then(e=>{return resolve(e.data)} )
    })
    return folderrequest
}

export function getOauthUrl(){

    const urlrequest = new Promise((resolve, reject)=>{
        axios.post(`${cloudapi}integrations/`, {},{
            headers: {
                Authorization: `Token ${MGC_SECRET}`
            }
    }).then(e=>{console.log(e); return resolve(e.data)})
})
    // const response = axios.post(`${cloudapi}/integrations/`)
    return urlrequest
}

export function getOauthToken(code){

    const urlrequest = new Promise((resolve, reject)=>{
        axios.post(`${cloudapi}/oauthtoken/`, {
            "code": code
        },{
            headers: {
                Authorization: `Token ${MGC_SECRET}`
            }
    }).then(e=>{console.log(e); return resolve(e.data)})
})
    // const response = axios.post(`${cloudapi}/integrations/`)
    return urlrequest
}

export function fetchPresignedURL(files)
{
    const urlrequest = new Promise((resolve, reject)=>{
        axios.post(`${cloudapi}generatepresignedurl/`,{
            "files": files
        },
        {
            headers: {
                Authorization: `Token ${MGC_SECRET}`
            }       
        }).then(e=>{console.log(e); resolve(e.data)})
    })
    return urlrequest
}