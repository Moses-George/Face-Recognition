import React, { useState } from "react";

import UrlContext from "./UrlContext";

const UrlContextProvider = ({ children }) => {

    const [imageUrl, setImageUrl] = useState("");
    const [boxes, setBoxes] = useState([]);

    const USER_ID = '9tg675lrhl4o';
    const PAT = 'a4eafde556804440b64dc836c941463e';
    const APP_ID = '3232fg';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';


    const fetchData = async (url) => {
        setImageUrl(url);
        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": url
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };

        try {
            const response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID +
                "/versions/" + MODEL_VERSION_ID +
                "/outputs", requestOptions);

            const result = await response.json();

            const clarifaiFaces = result.outputs[0].data.regions;

            const faces = [];

            clarifaiFaces.forEach(face => faces.push(face.region_info.bounding_box));

            setBoxes(faces);

        } catch (error) {
            console.log(error);
        }
    }

    const values = {
        imageUrl,
        fetchData,
        boxes,
    }

    return (
        <UrlContext.Provider value={values}>
            {children}
        </UrlContext.Provider>
    )
}

export default UrlContextProvider;