import React, { useContext, useState } from "react";

import UrlContext from "../store/UrlContext";
import './Input.css';

const Input = () => {

    const [text, setText] = useState({ input: '' });

    const { fetchData } = useContext(UrlContext);

    const handleChange = (e) => {
        setText({ input: e.target.value });
    }

    const submitData = (e) => {
        e.preventDefault();
        fetchData(text.input);
        setText({ input: "" });
    }

    return (
        <form onSubmit={submitData}>
            <input
                type="url"
                placeholder="Enter url..."
                onChange={handleChange}
                value={text.input} />
            <button>Detect</button>
        </form>
    )
}

export default Input;