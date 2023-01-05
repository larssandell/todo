import React from "react";

export default function ListRepresentation(props) {
    const displayList = props.listItemArray.map((item) => {
        return <div className="ToDoItem">{item}</div>;
    });

    return <div className="ToDoRepresentation">{displayList}</div>;
}
