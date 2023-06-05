import {useContext} from "react"
import DataContext from "./Context/DataContext"
const TeamMemberCard =({employee})=>{
  const male ="https://i.pinimg.com/474x/a2/8e/c0/a28ec037996fec33561c2a4527bfae72.jpg";
  const female = "https://static.vecteezy.com/system/resources/previews/010/882/588/original/woman-avatar-person-female-illustration-icon-character-face-portrait-woman-avatar-cartoon-girl-user-human-profile-isolated-white-adult-icon-office-headshot-woman-avatar-employee-face-head-vector.jpg"

  const {selectedTeam,handleClick} = useContext(DataContext)
 return(
   <div id={employee.id} key={employee.id} onClick={handleClick} style={{cursor:"pointer"}} 
        className={employee.team===selectedTeam? "card m-2 heightLight" : "card m-2"}>
    {employee.gender === "male"?<img src={male}/> : <img src={female}/>}
     <div className="card-body">
       <h5>Full Name: {employee.fullName}</h5>
       <p><b>Desgination:</b> {employee.title}</p>
     </div>
   </div>
 )
}
export default TeamMemberCard;