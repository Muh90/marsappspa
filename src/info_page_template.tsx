import React from "react";

type InfoProps = {
    title: string;
    p1: string;
    p2: string;
}

const Info: React.FC<InfoProps> = ({
    title,
    p1,
    p2
}) => {
    return (
        <body>
        <h1>{title}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
        </body>
    );
}

export default Info;