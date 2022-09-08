import React from "react";

const UrlContext = React.createContext({
    imageUrl: "",
    fetchData: (url) => {},
    boxes: [],
});

export default UrlContext;