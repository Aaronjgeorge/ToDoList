import React, { useState, useEffect } from "react";
import { AccordionItem,AccordionBody,AccordionHeader,UncontrolledAccordion,Input } from 'reactstrap';
import Sub from "./sub";

const Todo =(props)=>{


    const [task, setTask] = useState("");
    const [subTask, setSubTask] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isSubChecked, setIsSubChecked] = useState(false);

    useEffect(()=>{
      setTask(props.task)


      }
  ,[])

      const buttonCheck=()=>{
      if(task.subTasks.length===task.count&&task.subTasks.length>0){
          setIsChecked(true)
        }else{
          setIsChecked(false)
        }

      }


    const handleOnParentChange=(e)=>{
      if(e.target.checked){
        task.count+=1
        setIsSubChecked(true)
      }else{
        task.count=0
      }
        setIsChecked(!isChecked);
        setIsSubChecked(!isSubChecked)
      }
      



        return (task.subTasks?<div>
        <React.Fragment key={task.id}>
          <UncontrolledAccordion defaultOpen="1">
  <AccordionItem>
    <AccordionHeader targetId="1">
    <Input type="checkbox" 
    id={task.id}
          name={task.title}
          value="Paneer"
          checked={isChecked}
          onChange={handleOnParentChange}
          /> 
          
          {task.title}
          {task.subTasks.length>0? ` (${task.count} out of ${task.subTasks.length} subtasks completed)`:`No Subtasks`}

    </AccordionHeader>
    <AccordionBody accordionId="1">
    <span>
                <input
          name="subtask"
          type="text"
          value={subTask}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => setSubTask(e.target.value)}
        />
                <button
                className =" mt-2 btn btn-warning material-icons"
                onClick ={()=>{props.sub(subTask,task);}}
                >add subtask</button>
                </span>

                <Sub data={props.task} delete={props.deleteSub} add={props.sub} parentCheck={isSubChecked} subCheck={buttonCheck}/>

    </AccordionBody>
  </AccordionItem>
  </UncontrolledAccordion>

            <div className="col-11">


        
                
            </div>

        </React.Fragment>
      
      
      
      
    
    </div>
      
      :<div></div>)

}

export default Todo