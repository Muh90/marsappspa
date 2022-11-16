import React from "react";

type InfoProps = {
    title: string;
    p1: string;
    p2: string;
    image_src: string;
    image_className: string;
    image_alt: string;
}

const Info: React.FC<InfoProps> = ({
    title,
    p1,
    p2,
    image_src,
    image_className,
    image_alt
}) => {
    return (
        <body>
        <h1>{title}</h1>
        <p>{p1}</p>
        <p>{p2}</p>
        <img src={image_src} className={image_className} alt={image_alt} />
        </body>
    );
}

export default Info;