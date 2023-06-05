import "./styles.css";
import {DataProvider} from "./Context/DataContext";
import Nav from "./Nav"
import Header from "./Header"
import Employees from "./Employees"
import GroupedTeamMember from "./GroupedTeamMember"
import Footer from "./Footer"
import Error from "./Error"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

export default function App() {
  return (
  <DataProvider>
    <Router>
      <Nav/>
      <Header/>
        <Routes>
          <Route path="/" element={<Employees/>}>
          </Route>
          < Route path = "/GroupedTeamMember" element={<GroupedTeamMember/>}>
          </Route>
          <Route path = "*" element={<Error/>}>
          </Route>
        </Routes>
      <Footer/>
      
    </Router>
        
  </DataProvider>
  );
}
