import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "@material-ui/core/Button";

const Groups = ({ groupId, group_name, groupMembers}) => {
   const [groups, setGroups] = useState([])

   useEffect(() => {
      const getGroupsItems = async () => {
         try {
            await axios.get(`http://localhost:8070/student/displaygroups`)
               .then((res) => {
                  setGroups(res.data.existingGroups)
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
         {/* {groups.length !== 0 ? */}
            <div className="container">
               <h3>Student Groups </h3>
               <hr />
                     {groups.map((item) => (
                        <Button><>{item.group_name}</></Button>
                     ))}
            </div>
            {/* : <div></div>} */}
      </div>
   )
}

export default Groups