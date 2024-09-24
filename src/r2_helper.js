import {
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
    GetObjectAttributesCommand,
  } from "@aws-sdk/client-s3";
import { formatBytes } from "./formatters";
import axios from "axios";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { fetchPresignedURL } from "./mgc_helper";

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
    const filename_array=[]
    Array.from(files).map(file=>{
        file_array.push({
            filename: file.name,
            filesize: formatBytes(file.size),
            loaded: 0,
            fileprogress: 0,
            abortcontrol: null
        })

        filename_array.push(file.name)
    })
    stateupdate({
        show: true,
        filecount: files.length,
        files: file_array
    })
    // Reassigning the state variable with the file progress for the drawer component.
    fetchPresignedURL(filename_array).then(signedurls=>{
        for (let index = 0; index < files.length; index++) {
            const element = files[index];
            console.log(signedurls[element.name])

            // Upload Cancel Handler
            const abc = new AbortController()
            const uploadsignal = abc.signal
            uploadsignal.onabort = ()=>{
                file_array.pop(file_array.findIndex(e=>e.filename === element.name))
                stateupdate({
                    show: true,
                    filecount: files.length - 1,
                    files: file_array
                })
            }
            axios.put(
                signedurls[element.name], //Get Signed url from object
                element, {
                headers: {
                    "Content-Type": element.type
                },
                signal: uploadsignal,
                onUploadProgress: (pe)=>{
                    let Inprogress_file = file_array[file_array.findIndex(e=>e.filename === element.name)]
                    Inprogress_file.fileprogress = pe.progress * 100
                    if (Inprogress_file.fileprogress === 100)
                    {
                        let Completed_file = file_array.pop(file_array.findIndex(e=>e.filename === resp.config.data.name))
                        console.log(Completed_file)
                        console.log('remaining', file_array)
                        stateupdate(
                            {
                                show: true,
                                filecount: files.length - 1,
                                files: file_array
                            }
                        )
                    }
                    Inprogress_file.loaded = formatBytes(pe.loaded)
                    Inprogress_file.abortcontrol = abc
                    stateupdate(
                        {
                            show: true,
                            filecount: files.length,
                            files: file_array
                        }
                    )
                }
            }).then(resp=>{
                let Completed_file = file_array.pop(file_array.findIndex(e=>e.filename === resp.config.data.name))
                console.log(Completed_file)
                console.log('remaining', file_array)
                stateupdate(
                    {
                        show: true,
                        filecount: files.length - 1,
                        files: file_array
                    }
                )
            }).catch(err=>{
                if (err.code === 'ERR_CANCELED')
                {
                    console.log('Upload Cancelled')
                }
            })
        }
    })
}


// export function getObject(){
//     const command  = new GetObjectAttributesCommand({ 
//         Bucket: BUCKETNAME,
//         Key: ,
//     })

//     getSignedUrl(s3, command, {expiresIn: 3600})
//         .then(p=>{

//     axios.put(p, element, {
//         headers: {
//             "Content-Type": element.type
//         },
//         signal: uploadsignal,
//         onUploadProgress: (pe)=>{
//             let Inprogress_file = file_array[file_array.findIndex(e=>e.filename === element.name)]
//             Inprogress_file.fileprogress = pe.progress * 100
//             if (Inprogress_file.fileprogress === 100)
//             {
//                 let Completed_file = file_array.pop(file_array.findIndex(e=>e.filename === resp.config.data.name))
//                 console.log(Completed_file)
//                 console.log('remaining', file_array)
//                 stateupdate(
//                     {
//                         show: true,
//                         filecount: files.length - 1,
//                         files: file_array
//                     }
//                 )
//             }
//             Inprogress_file.loaded = formatBytes(pe.loaded)
//             Inprogress_file.abortcontrol = abc
//             stateupdate(
//                 {
//                     show: true,
//                     filecount: files.length,
//                     files: file_array
//                 }
//             )
//         }
//     })
// }