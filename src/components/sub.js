import React, { useState, useEffect } from "react";
import { Input } from 'reactstrap';




const Sub=(props)=>{
    const [task, setTask] = useState("");
    const [isChecked, setIsChecked] = useState(false);


    useEffect(()=>{
        setTask(props.data)

        }
    ,[])

    const handleOnChange = (e,event) => {
        if(e.target.checked){
          task.count+=1
        }else{
            if(task.count>0)            
          task.count-=1
        }
        setIsChecked(!isChecked);
        props.subCheck();

      };


    return(task.subTasks?task.subTasks.map((subtask)=>(
        <div>
          <span className = "bg-white btn mt-2" style={{textAlign: "left", fontWeight: "bold"}}>
              <Input type="checkbox" 
                  id={subtask.id}
                  name={subtask.title}
                  value={""}
                  checked={props.parentCheck?true:isChecked}
                  onChange={handleOnChange}/>
              {subtask.title}
          <button
          className =" mt-2 btn btn-warning material-icons"
          onClick ={()=> props.delete(task,subtask)}
          >delete</button>
          </span>
        </div>
          
          )):<p> hjgj</p>)
    }

export default Sub