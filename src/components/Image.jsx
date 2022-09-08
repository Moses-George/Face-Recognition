
import React, { useContext, useLayoutEffect, useRef, useState } from "react";

import classes from './Image.module.css';

import UrlContext from "../store/UrlContext";

const Image = () => {

    const { imageUrl, boxes } = useContext(UrlContext);
    const ref = useRef(null);

    const [rect, setRect] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        setRect({ width: ref.current.offsetWidth, height: ref.current.offsetHeight });
    }, [boxes]);

    return (
        <div className={classes['face-recognition']}>
            <img src={imageUrl} alt="img" ref={ref} />
            {boxes.map((box, index) => <div key={index} style={{
                top: box.top_row * rect.height,
                right: rect.width - box.right_col * rect.width,
                left: box.left_col * rect.width,
                bottom: rect.height - box.bottom_row * rect.height
            }} />)}
        </div>
    )
}

export default Image;