import React from "react";

const Image = (props) => {
    const {dataUrl} = props;
    
    return ( 
        <div>
            <img src = {dataUrl} />

        </div>

    );
}

export default Image