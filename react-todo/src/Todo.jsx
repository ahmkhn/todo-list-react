import { useState } from 'react';
function Todo(){
    return(
        <>
            <div className="main-container">
            <input type="text" placeholder="Enter a task" className="enter-input"></input>
            <button className="add-button">+</button>
            </div>
            <div className="second-container">
                <div>
                    <h1>Tasks</h1>
                </div>
            </div>
        </>
        
    );
}
export default Todo;