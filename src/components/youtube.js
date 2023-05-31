import React from "react";

const Youtube = (props) => {
    const {dataUrl} = props;

    return ( 
        <div>
            <iframe width="100%" height="500px" src={dataUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>

    );
}

export default Youtube;