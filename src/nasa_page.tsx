import React from "react";

type NasaProps = {
    title: string;
}

const Nasa: React.FC<NasaProps> = ({
    title,
}) => {
    return (
        <body>
        <h1>{title}</h1>
        <p>This is a paragraph.</p>
        <p>This is a second paragraph.</p>
        </body>
    );
}

export default Nasa;