import {React, memo, useEffect, useState} from 'react'
import DocViewer from "@cyntler/react-doc-viewer"
import Loader from './loader'

const Documentviewer = (props) => {
    console.log(props.fileurl)
    // useEffect(()=>{
    //     console.log(props.fileurl[0])
    //     if (props.fileurl[0].uri != actualurl.fileurl[0].uri)
    //     {
    //         setactualurl(props.fileurl)
    //     }   
    // },[])

    const MyLoadingRenderer = ({ document, fileName }) => {
        return (
            <section className='w-full h-full flex justify-center mt-12'>
                <div className='font-poppins flex gap-2'>
                    <p className='text-sm font-medium font-poppins'>Loading</p>
                    <Loader size="w-6 h-6"/>
                </div>
            </section>
        );
      };


  return (
    <DocViewer 
                key={"somedistinctkey"}
                prefetchMethod = "GET"
                documents={[{uri: props.fileurl}]}
                config={{
                    loadingRenderer: {
                        overrideComponent: MyLoadingRenderer,
                    },
                  pdfVerticalScrollByDefault: true, 
                  pdfZoom: {
                    defaultZoom: 1.05,
                    zoomJump: 1,
                    },
                  header: {
                    disableHeader: true
                  }
                  }}
                  theme={{
                    primary: "#E4E4E4",
                    secondary: "#E4E4E4"
                  }}
                />
  )
}
// const checkdiff = ()=>props.fileurl[0].uri === actualurl[0].uri

export default memo(Documentviewer)