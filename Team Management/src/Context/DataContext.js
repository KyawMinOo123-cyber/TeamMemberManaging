import {createContext,useEffect,useState} from "react";

const DataContext = createContext({});

export const DataProvider=({children})=>{
    const[employees,setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [
      {id:1,fullName:"Rick Grime",title:"Node developer",gender:"male",team:"TeamA"},
      {id:2,fullName:"Carl",title:"React developer",gender:"male",team:"TeamB"},
      {id:3,fullName:"Lory",title:"Angular developer",gender:"female",team:"TeamC"},
      {id:4,fullName:"Dutit",title:"Python developer",gender:"female",team:"TeamD"},
      {id:5,fullName:"Daryol",title:"Vue developer",gender:"male",team:"TeamA"},
      {id:6,fullName:"Shane",title:"Javascript developer",gender:"female",team:"TeamB"},
      {id:7,fullName:"Glan",title:"Senior developer",gender:"male",team:"TeamC"},
      {id:8,fullName:"Maggie",title:"Lead developer",gender:"female",team:"TeamD"},
      {id:9,fullName:"Negan",title:"Email developer",gender:"male",team:"TeamA"},
      {id:10,fullName:"Rosita",title:"Node developer",gender:"female",team:"TeamB"},
      {id:11,fullName:"Tara",title:"React developer",gender:"female",team:"TeamC"},
      {id:12,fullName:"Jesus",title:"Angular developer",gender:"male",team:"TeamD"}
    ]);

    const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam"))|| "TeamB")
      
    useEffect(()=>{
        localStorage.setItem("employeeList",JSON.stringify(employees))
    },[employees]);

    useEffect(()=>{
      localStorage.setItem("selectedTeam",JSON.stringify(selectedTeam))
    },[selectedTeam]);


    function handleChange(event){
      setTeam(event.target.value)
    }
    function handleClick(event){
      const transformedEmployees = employees.map((employee)=>employee.id === parseInt(event.currentTarget.id)?(employee.team === selectedTeam)?
                                    {...employee,team:""}:{...employee,team:selectedTeam}:employee );
      setEmployees(transformedEmployees)
    };

    return<DataContext.Provider value ={{employees,selectedTeam,setTeam,handleClick,handleChange}}>
      {children}
    </DataContext.Provider>

};

export default DataContext;