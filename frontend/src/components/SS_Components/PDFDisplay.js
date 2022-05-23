import axios from 'axios';
import React, { useState, useEffect } from 'react';
import StudentNavBar from '../Home_Component/StudentNavBar';
import Footer from '../Layout/footer';


const PDFDisplay = () => {
    const [pdfupload, setpdfupload] = useState([{
           pdfupload:""
    }]);

    useEffect(() => {
        function getpdf(){
          axios.get("http://localhost:8070/document/pdfdisplay")   
            .then((res) => {
            setpdfupload(res.data)
            }).catch((error) => {
              console.log(error.message)
         })              
    }
        getpdf()
    },[])
    
  return (
        <div>
          <StudentNavBar/>
           <br/><br/>
             {pdfupload.map(( pdf) => (
               <a href={pdf.pdfupload} download>
                 <button>
                  Download
                   </button>
                     </a>
        ) )}
               <br/><br/><br/><br/> <br/><br/> <br/><br/><br/><br/> <br/><br/>
            <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>
        <Footer/>
    </div>
  )
}
export default PDFDisplay;
