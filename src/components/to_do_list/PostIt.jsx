import React from "react";
import { useState } from "react";

function PostIt(props) {
    const [listItem, setListItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(document.querySelector("#list__item").value);
        // this should be sent to the representation of the list
        // console.log(listItem);
        props.SetList((prevState) => [...prevState, listItem]);
        setListItem("");
    };

    const handelInputChange = (e) => {
        setListItem(e.target.value);
        // console.log(e.target);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label for="list__item">
                List your to do's:
                <input
                    value={listItem}
                    onChange={handelInputChange}
                    id="list__item"
                ></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PostIt;
