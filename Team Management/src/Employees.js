import Teams from "./Teams";
import TeamMember from "./TeamMember";
const Employees=()=>{
  return(
    <main calssName="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className = "col-6">
            <Teams/>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <div className = "col-8">
            <div className="card-list">
              <TeamMember/>
            </div>
          </div>
        </div>
    </main>
  )

}

export default Employees;