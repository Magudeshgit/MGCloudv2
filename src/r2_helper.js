import axios from "axios";
import { fetchPresignedURL, userFilesAdded } from "./mgc_helper";
import { formatBytes } from "./formatters";

// Handler for uploading files.
export function UploadFiles(files, stateupdate, user) {
    console.log("Initiating Upload Sequence", files)
    
    // Primary Common file data array for handling upload/completed/progress operations
    const file_array = []
    // Dedicated filename array for fetching presigned url only
    const filename_array=[]
    // Dedicated File object to handle post upload operation which is intimate MGC API
    const uploadcompletedarray = []

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
                    console.log(pe)
                    let Inprogress_file = file_array[file_array.findIndex(e=>e.filename === element.name)]
                    Inprogress_file.fileprogress = pe.progress * 100
                    if (Inprogress_file.fileprogress === 100)
                    {
                        // let Completed_file = file_array.pop(file_array.findIndex(e=>e.filename === resp.config.data.name))
                        // console.log(Completed_file)
                        // console.log('remaining', file_array)
                        // stateupdate(
                        //     {
                        //         show: true,
                        //         filecount: files.length - 1,
                        //         files: file_array
                        //     }
                        // )
                        console.log(" 1Fileuploaded")
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
                // File upload completed handler
                let Completed_file = file_array.pop(file_array.findIndex(e=>e.filename === resp.config.data.name))
                uploadcompletedarray.push(Completed_file)
                console.log(Completed_file)
                console.log('remaining', uploadcompletedarray)
                userFilesAdded([Completed_file], user.uid).then(p=>{
                    stateupdate(
                        {
                            show: true,
                            filecount: files.length - 1,
                            files: file_array
                        }
                    )
                })
            }).catch(err=>{
                if (err.code === 'ERR_CANCELED')
                {
                    console.log('Upload Cancelled')
                }
            })
        }
        console.log("Initiating Phase 2")
        return true
    })

    // Phase 2: Updating MGC api
    // file_array.push({
    //     filename: file.name,
    //     filesize: formatBytes(file.size),
    //     loaded: 0,
    //     fileprogress: 0,
    //     abortcontrol: null
    // })
    
    console.log("Initiating Phase 2")
    userFilesAdded(uploadcompletedarray, user.uid).then(g=>console.log(g))
}