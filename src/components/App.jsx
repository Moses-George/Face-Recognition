import React from "react";

import Input from "./Input";
import Image from "./Image";
import Navbar from "./Navbar";

const App = () => {

    return (
        <div className="detection">
            <Navbar />
            <Input />
            <Image />
        </div>
    )
}

export default App;