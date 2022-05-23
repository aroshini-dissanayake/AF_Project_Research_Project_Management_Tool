// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const presantationpdfdisplay = () => {
//     const [presantationpdfupload, setpresantationpdfupload] = useState([{
//       presantationpdfupload:""
//     }]);

//     useEffect(() => {
//         function getpdf(){
//           axios.get("http://localhost:8070/presantationpdf/presantationpdfdisplay")   
//             .then((res) => {
//               setpresantationpdfupload(res.data)
//             }).catch((error) => {
//               console.log(error.message)
//          })              
//     }
//     getpdf()
// },[])

// return (
// <div>
//     {pdfupload.map(( pdf) => (
//       <a href={pdf.pdfupload} download>
//         <button>
//            Download
//               </button>
//                  </a>
//     ) )}
// </div>
// )
// }
// export default presantationpdfdisplay;