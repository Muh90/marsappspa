import React from "react";
import Info from "./info_page_template";
import logo from './logo.svg';

type NasaProps = {};

const Nasa: React.FC<NasaProps> = () => {
    return (
        <div className="Nasa">
            <Info
                title = "NASA"
                p1 = "This is a paragraph."
                p2 = "This is a second paragraph."
                image_src = {logo}
                image_className = "App-logo"
                image_alt = "logo"
            />
        </div>
    )
}

export default Nasa;