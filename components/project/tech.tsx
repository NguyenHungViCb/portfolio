import React from "react";
import TechCard from "./tech-card";

export const Tech: React.FC<{ name: string }> = ({name}) => {
    if (name === "react") {
        return <TechCard.React/>;
    }
    if (name === "nodejs") {
        return <TechCard.Nodejs/>;
    }
    if (name === "mongodb") {
        return <TechCard.Mongodb/>;
    }
    if (name === "material-ui") {
        return <TechCard.MaterialUi/>;
    }
    return <TechCard/>;
};