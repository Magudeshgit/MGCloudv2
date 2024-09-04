import {
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
  } from "@aws-sdk/client-s3";
import { formatBytes } from "./formatters";
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

export function UploadFiles(files, stateupdate) {
    console.log("Initiating Upload Sequence", files)
    
    // Pre initialzing the state variable with the file data for the drawer compoenent.
    const file_array = []
    Array.from(files).map(file=>{
        file_array.push({
            filename: file.name,
            filesize: formatBytes(file.size),
            loaded: 0,
            fileprogress: 0
        })
    })
    stateupdate({
        show: true,
        filecount: files.length,
        files: file_array
    })

    // Reassigning the state variable with the file progress for the drawer component.
    for (let index = 0; index < files.length; index++) {
        const element = files[index];

        const command  = new PutObjectCommand({ 
            Bucket: BUCKETNAME,
            Key: element.name,
        })
        
        getSignedUrl(s3, command, {expiresIn: 3600})
        .then(p=>{
            axios.put(p, element, {
                headers: {
                    "Content-Type": element.type
                },
                onUploadProgress: (pe)=>{
                    let Inprogress_file = file_array[file_array.findIndex(e=>e.filename === element.name)]
                    Inprogress_file.loaded = formatBytes(pe.loaded)
                    Inprogress_file.fileprogress = pe.progress * 100
                    console.log(Inprogress_file)
                    stateupdate(
                        {
                            show: true,
                            filecount: files.length,
                            files: file_array
                        }
                    )
                }
            }).then(k=>console.log(k))
            // let ft =fetch(p, {method: "PUT", body: fr.result})
            // ft.then(o=>console.log(o.ok))
            
        })
    }
}




// const command = new ListObjectsV2Command({
//     Bucket: "mgcloud",
//     MaxKeys: 500
// })

// s3.send(command).then(e=>console.log(e))