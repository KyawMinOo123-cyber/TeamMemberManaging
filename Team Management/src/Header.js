import {useContext} from "react"
import DataContext from "./Context/DataContext";

const Header=()=>{
  const{employees,selectedTeam} = useContext(DataContext);
  const memberCount = (employees.filter((employee)=>employee.team === selectedTeam)).length

  return(
    <header className="container">
      <div className="row justify-content-center mt-2 mb-2 text-center">
        <div className="col-8">
          <h3>Team Member Management</h3>
          <h5>{selectedTeam}  has {memberCount} {memberCount ===1?"member":"members"} </h5>
        </div>
      </div>
    </header>
  )
}

export default Header;