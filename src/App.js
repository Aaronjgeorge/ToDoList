import React, { useState, useEffect } from "react";
import Todo from './components/todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  
  useEffect(()=>{
    if(localStorage.getItem("localTasks")){
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  },[])
  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [subTask, setSubTask] = useState({});


  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task, subTasks:[], status: "active", count:0};
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const addSubTask = (sub,task) => {
    if (task) {
      const newSubTask = { id: new Date().getTime().toString(), title: sub, status: "active"};
      setSubTask(newSubTask)
      task.subTasks.push(newSubTask);
      localStorage.setItem("localTasks", JSON.stringify(tasks));
      setSubTask({});
    }
  };

  const handleDelete = (task)=>{
      
    const deleted = tasks.filter((t)=>t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted))
}

const handleSubDelete = (task,subtask)=>{
      
            const deleted = task.subTasks.filter((t)=>t.id !== subtask.id);
            task.subTasks=deleted
            if(task.count>0){
              task.count-=1
            }
            localStorage.setItem("localTasks", JSON.stringify(tasks));
            setSubTask({})
        }
        
  const handleClear=()=>{
    setTasks([]);
    localStorage.removeItem("localTasks");
}

    return(
      <div>
        <div className="container row">
      <h1 className="mt-3 text-black">To-Do App</h1>
      <div className="col-8">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="col-4">
        <button
          className="btn btn-primary form-control material-icons"
          onClick={addTask}
        >
          add
        </button>
      </div>
      <div>
        {tasks.map((task)=>(
          <React.Fragment>

          <Todo task={task} sub={addSubTask} deleteSub={handleSubDelete}/>
          <span>
          <button
          className =" mt-2 btn btn-warning material-icons"
          onClick ={()=> handleDelete(task)}
          >delete</button>
</span>    
          </React.Fragment>
        ))}
      </div>
      </div>
      {!tasks.length ? null:(
          <div>
              <button className= "btn btn-secondary  mt-4 mb-4" onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
    </div>
  );
}

export default App;
