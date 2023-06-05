import {useContext} from 'react'
import DataContext from "./Context/DataContext"
import TeamMemberCard from "./TeamMemberCard"
const TeamMember =()=>{
  const{employees}= useContext(DataContext);

  return(
      employees.map((employee)=>(
       <TeamMemberCard key={employee.id}employee={employee}/> 
      ))
    
  )
}
export default TeamMember;