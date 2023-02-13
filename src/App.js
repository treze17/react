
import './App.css';
import Employee from './components/employee'
import { useState } from 'react';
function App() {
  const [role, setRole] = useState('dev');
  console.log("We are displaying employee list")
  const showEmployees = true;
  return (
    <div className="App">
      
{showEmployees ? (
  <>
  <input type='text' onChange = {(e) => {
    console.log(e.target.value)
    setRole(e.target.value)
  }}/>
  <Employee name = "Wedia" role = "Intern"/>
  <Employee name = "Saud" role = {role}/>
  </>
): (
  <p>You can't see the list!!!</p>
)}
    </div>
  );
}

export default App;
