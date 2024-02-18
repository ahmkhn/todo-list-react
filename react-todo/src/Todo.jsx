import { useState } from 'react';
function Todo(){
    const [taskArr,setTaskArr]=useState([]);
    const [task,setTask]=useState("");
    function handleAdd(){
        const textTask = document.getElementById("enter-inp").value;
        document.getElementById("enter-inp").value="";
        if(textTask!=""){
            setTask(t=>setTask(textTask));
            setTaskArr(arr=>[...taskArr,textTask]);
        }
    }
    function handleRemove(index){
        setTaskArr(r=>taskArr.filter((_, i) => i !== index));
    }
    function moveTaskUp(index){
        const updatedArray=[...taskArr];
        const taskBefore=updatedArray[index-1];
        if(taskBefore!=null){
            updatedArray[index-1]=updatedArray[index];
            updatedArray[index]=taskBefore;
        }
        setTaskArr(c=>updatedArray);
    }
    function moveTaskDown(index){
        const updatedArray=[...taskArr];
        const taskAfter=updatedArray[index+1];
        if(taskAfter!=null){
            updatedArray[index+1]=updatedArray[index];
            updatedArray[index]=taskAfter;
            console.log("hello");
        }
        setTaskArr(c=>updatedArray);
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
                            <button className="remove-button" onClick={()=>handleRemove(index)}>❌</button>
                            <button className="take-up" onClick={()=>moveTaskUp(index)}>👆</button>
                            <button className="take-down" onClick={()=>moveTaskDown(index)}>👇</button>
                        </li>)}
                        </ul>
                </div>
            </div>
        </>
        
    );
}
export default Todo;