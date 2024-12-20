import axios from "axios";
import { fetchPresignedURL, userFilesAdded  , getUserFiles } from "./mgc_helper";
import { formatBytes } from "./formatters";

// Handler for uploading files.
export function UploadFiles(files, stateupdate, user, fileupdate, statuspane) {

    console.log("Initiating Upload Sequence", files)
    
    // Primary Common file data array for handling upload/completed/progress operations
    const file_array = []
    // Dedicated filename array for fetching presigned url only
    const filename_array=[]
    // Dedicated File object to handle post upload operation which is intimate MGC API
    const uploadcompletedarray = []

    function drawerClosure()
    {
        console.log("DONE WITH UPLOADING", stateupdate)
    }

    Array.from(files).map(file=>{
        file_array.push({
            filename: file.name,
            filesize: file.size,
            loaded: 0,
            fileprogress: 0,
            abortcontrol: null
        })

        filename_array.push(file.name)
    })
    // Reassigning the state variable with the file progress for the drawer component.
    fetchPresignedURL(filename_array).then(signedurls=>{
        stateupdate({
            show: true,
            filecount: files.length,
            files: file_array
        })
        statuspane(true)
        for (let index = 0; index < files.length; index++) {
            const element = files[index];

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
            
            // Uploading
            const request = axios.put(
                signedurls[element.name], //Get Signed url from object
                element, {
                headers: {
                    "Content-Type": element.type
                },
                signal: uploadsignal,
                onUploadProgress: (pe)=>{
                    console.log('progress', pe)
                    let Inprogress_file = file_array[file_array.findIndex(e=>e.filename === element.name)]
                    Inprogress_file.fileprogress = pe.progress * 100
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
                // let Completed_file = file_array.splice(file_array.findIndex(e=>e.filename === resp.config.data.name),1)[0]
                // console.log('blah', resp, [Completed_file])
                userFilesAdded([Completed_file], user.uid).then(p=>{
                    console.log(p)
                    stateupdate(
                        {
                            show: true,
                            filecount: files.length - 1,
                            files: file_array
                        }
                    )
                    getUserFiles(user.uid).then(files=>fileupdate(existing=>{
                        return {
                            filemeta: existing.filemeta,
                            filedata: files
                        }
                    }))
                })
                console.log(sta)
            }).catch(err=>{
                if (err.code === 'ERR_CANCELED')
                {
                    console.log('Upload Cancelled')
                }
            });
            uploadcompletedarray.push(request)
        }   

        Promise.all(uploadcompletedarray)
        .then(()=>{console.log("Now thats done!"); statuspane(false)})
    })

}