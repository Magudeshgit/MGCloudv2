// MGCloud API Logging and Retrieving Operations
const cloudapi = 'http://127.0.0.1:8000/api/cloud/'
import axios from "axios"

export function getUserFiles(userid) {
    const filerequest = new Promise((resolve, reject)=>{
        axios.post(cloudapi+'userfiles/',
            {
                userid: userid
            },
            {
                headers: {
                    Authorization: `Token ${import.meta.env.VITE_MGC_TOKEN}`
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
                    Authorization: `Token ${import.meta.env.VITE_MGC_TOKEN}`
                }
            }
        ).then(e=>{return resolve(e.data)} )
    })
    return folderrequest
}