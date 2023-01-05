import React, { useState } from "react";
import PostIt from "./PostIt";
import ListRepresentation from "./ListRepresentation";

function ToDoList() {
    const [listItemArray, setListItemArray] = useState([]);

    return (
        <div className="toDoListContainer">
            {/* <h2>To Do List:</h2> */}
            <div>
                <PostIt SetList={setListItemArray} />
                <ListRepresentation listItemArray={listItemArray} />
            </div>
        </div>
    );
}

export default ToDoList;
