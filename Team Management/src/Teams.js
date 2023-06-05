import {useContext} from "react"
import DataContext from "./Context/DataContext"
const Teams= ()=>{
const {handleChange,selectedTeam} = useContext(DataContext);

return(
  <select className="form-select form-select-lg" onChange={handleChange} value={selectedTeam}>
    <option value="TeamA">TeamA</option>
    <option value="TeamB">TeamB</option>
    <option value="TeamC">TeamC</option>
    <option value="TeamD">TeamD</option>
  </select>
)
}
export default Teams;