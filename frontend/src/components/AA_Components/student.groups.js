import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';

const Groups = () => {
   const [groups, setGroups] = useState([])
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);

const handleChangePage = (event, newPage) => {
    setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
 };


   useEffect(() => {
      const getGroupsItems = async () => {
         try {
            await axios.get(`http://localhost:8070/student/display`)
               .then((res) => {
                  setGroups(res.data.groups)
               })
               .catch((error) => {
                  console.log(error.message)
               })
         } catch (error) {
            console.log(error.message)
         }
      }
      getGroupsItems()
   }, [])


   return (
      <div>
         {groups.length !== 0 ?
            <div>
               <h3>Student Groups </h3>
               <hr />
               <table className="table table-bordered">
                  <tbody>
                     {groups.map((row) => (
                        <tr>
                           <td>{row.group_name}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            : <div></div>}
      </div>
   )
}

export default Groups