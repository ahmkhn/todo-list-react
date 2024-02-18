import { useState } from 'react';
function Todo(){
    const [taskArr,setTaskArr]=useState([]);
    const [task,setTask]=useState("");
    function handleAdd(){
        const textTask = document.getElementById("enter-inp").value;
        document.getElementById("enter-inp").value="";
        setTask(t=>setTask(textTask));
        setTaskArr(arr=>[...taskArr,textTask]);
    }
    function handleRemove(index){
        setTaskArr(r=>taskArr.filter((_, i) => i !== index));
    }
    return(
        <>
            <div className="main-container">
            <input type="text" placeholder="Enter a task" className="enter-input" id="enter-inp"></input>
            <button onClick={handleAdd} className="add-button">+</button>
            </div>
            <div className="second-container">
                <div className="task-div">
                    <h1>Tasks</h1>
                    <ul>
                        {taskArr.map((element,index)=>
                        <li className="list-elements" key={index}>
                            {element}
                            <button className="remove-button" onClick={()=>handleRemove(index)}>X</button>
                        </li>)}
                        </ul>
                </div>
            </div>
        </>
        
    );
}
export default Todo;