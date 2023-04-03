
import './index.css';
import Employee from './components/employee'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
      name : 'King',
      role : 'Coder',
      img : 'https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name : 'Wedia',
      role : 'jnr Dev',
      img : 'https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name : 'Saud',
      role : 'Senior Dev',
      img : 'https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name : 'Saud',
      role : 'Senior Dev',
      img : 'https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
   
    ]
  );
  
  const showEmployees = true;
  return (
    <div className="App">
      
{showEmployees ? (
  <>
 
  <div className='flex flex-wrap justify-center'>

 {employees.map((ele)=>{
  console.log(ele);
  return(
       <Employee
       key ={uuidv4()}
          name={ele.name} 
          role={ele.role} 
          img={ele.img}
        />
      );
 })}


 </div>
  </>
): (
  <p>You can't see the list!!!</p>
)}
    </div>
  );
  
}

export default App;
