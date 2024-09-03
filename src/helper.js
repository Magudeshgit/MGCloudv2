import {
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
  } from "@aws-sdk/client-s3";

import axios from "axios";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3 = new S3Client({
    endpoint: import.meta.env.VITE_CLOUD_API_ENDPOINT,
    credentials: {
        accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_SECRET_KEY,
    },
    region: "auto",

})

const BUCKETNAME = "mgcloud"

export function UploadFiles(files) {
    console.log("Initiating Upload Sequence")
    const fr = new FileReader()
    for (let index = 0; index < files.length; index++) {
        const element = files[index];
        fr.readAsArrayBuffer(element)

        fr.addEventListener('load', ()=>{
            const command  = new PutObjectCommand({ 
                Bucket: BUCKETNAME,
                Key: element.name,
                Body: fr.result
            })
            console.log(fr.result)
            getSignedUrl(s3, command, {expiresIn: 3600})
            .then(p=>{
                axios.put(p, element, {
                    headers: {
                        "Content-Type": element.type
                    },
                    onUploadProgress: (pe)=>{
                        console.log(pe)
                    }
                }).then(k=>console.log(k))
                // let ft =fetch(p, {method: "PUT", body: fr.result})
                // ft.then(o=>console.log(o.ok))
                
            })
        })


        
    }
}




// const command = new ListObjectsV2Command({
//     Bucket: "mgcloud",
//     MaxKeys: 500
// })

// s3.send(command).then(e=>console.log(e))