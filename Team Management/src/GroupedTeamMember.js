import {useState,useContext} from "react";
import DataContext from "./Context/DataContext"
const GroupedTeamMember=()=>{
  const {employees,selectedTeam,setTeam} = useContext(DataContext);
  const [groupedEmployees,setGroupedEmployees] = useState(groupedTeam());

  function groupedTeam(){
    var teams =[];

    var teamAMembers = employees.filter((employee)=>employee.team === "TeamA");
    var teamA = {team:"TeamA",members:teamAMembers,collapsed:selectedTeam === "TeamA"?false:true};
    teams.push(teamA);

    var teamBMembers = employees.filter((employee)=>employee.team === "TeamB");
    var teamB = {team:"TeamB",members:teamBMembers,collapsed:selectedTeam==="TeamB"?false:true};
    teams.push(teamB);

    var teamCMembers = employees.filter((employee)=>employee.team==="TeamC");
    var teamC = {team:"TeamC",members:teamCMembers,collapsed:selectedTeam === "TeamC"?false:true};
    teams.push(teamC);

    var teamDMembers = employees.filter((employee)=>employee.team === "TeamD");
    var teamD = {team:"TeamD",members:teamDMembers,collapsed:selectedTeam==="TeamD"?false:true};
    teams.push(teamD);

    return teams;
  }

  function handleTeamClick(event){
    var newGroupedEmployee = groupedEmployees.map((newEmployee)=>newEmployee.team === event.currentTarget.id?{...newEmployee,collapsed:!newEmployee.collapsed}:newEmployee)
    setGroupedEmployees(newGroupedEmployee);
    setTeam(event.currentTarget.id)
  }
  return(
    <div className="container">
      {groupedEmployees.map((item)=>{
        return(
          <div className="card m-3" key={item.team} style={{cursor:"pointer"}}>
          <h3 id={item.team}onClick={handleTeamClick}>Team Name:{item.team}
          </h3>
            <div id={"collapse_"+item.team} className={item.collapsed ===  true ? "collapse" : "" }>
              <hr/>
              {item.members.map((groupData)=>{
                return(
                  <div key ={groupData.id} className="m-3">
                    <h5>Full Name: {groupData.fullName}</h5>
                    <p><b>Designation:</b>{groupData.title}</p>
                  </div>
                  
                )
              })}

            </div>
          </div>
        )
      })
      }
    </div>
  )

}

export default GroupedTeamMember;